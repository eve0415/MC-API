import {
    CFProject,
    File,
    LatestFile,
    Author,
    Attachment,
    ReleaseType,
    Dependency,
    DependencyTypes,
    Category,
    GameCategory,
    ValueOf,
} from '.';
import { curseforge } from '../../api';

/**
 * Represents a project but smaller and simpler
 */
export class SimpleProject {
    /** The ID of the project */
    readonly id: number;
    /** The name of the project */
    readonly name: string;
    /** The small description of the project */
    readonly summary: string;
    /** An array of authors of the project */
    readonly authors: SimpleAuthor[];
    /** An array of attachments of the project */
    readonly attachments: SimpleAttachment[];
    /** A link to the project */
    readonly url: string;
    /** An array of files of the project */
    readonly files: SimpleFile[];
    /** The time the project got created */
    readonly dateCreated: Date;
    /** The time the project got released */
    readonly dateReleased: Date;
    /** The time the project got updated */
    readonly dateModified: Date;
    /** The popularity score of the project */
    readonly popularityScore: number;
    /** The popularity rank of the project */
    readonly popularityRank: number;
    /** Whether or not the project is featured */
    readonly isFeatured: boolean;
    /** Whether or not the project is available */
    readonly isAvailable: boolean;
    /** An array of categories that are related to the project */
    readonly categories: SimpleCategory[];
    /** An array of sections that are related to the project */
    readonly section: SimpleSection;

    /**
     * @constructor
     * @param project - Project data
     */
    public constructor(project: CFProject) {
        this.id = project.id;
        this.name = project.name;
        this.summary = project.summary;
        this.url = project.websiteUrl;
        this.files = this.initFile(project.latestFiles, project.gameVersionLatestFiles);
        this.dateCreated = project.dateCreated;
        this.dateReleased = project.dateReleased;
        this.dateModified = project.dateModified;
        this.popularityScore = project.popularityScore;
        this.popularityRank = project.gamePopularityRank;
        this.isFeatured = project.isFeatured;
        this.isAvailable = project.isAvailable;
        this.section = new SimpleSection(project.categorySection, project.gameName);
        this.authors = project.authors.map(a => new SimpleAuthor(a));
        this.attachments = project.attachments.map(a => new SimpleAttachment(a));
        this.categories = project.categories.map(c => new SimpleCategory(c));
    }

    private initFile(files: File[], latest: LatestFile[]) {
        const cached: SimpleFile[] = files.map(f => new SimpleFile(f.projectId, f, true));
        cached.sort((a, b) => a.id < b.id ? 1 : -1);

        for (const l of latest) {
            if (cached.find(c => c.id === l.projectFileId)) continue;
            const filterd = latest.filter(f => f.projectFileId === l.projectFileId);
            cached.push(new SimpleFile(files[0].projectId, filterd, !cached.find(c => c.gameVersion.includes(l.gameVersion))));
            cached.sort((a, b) => a.id < b.id ? 1 : -1);
        }

        return cached;
    }

    /**
     * Fetch project's description.
     */
    public getDescription(): Promise<string> {
        return curseforge.getProjectDescription(this.id);
    }
}

/**
 * Represents a author but smaller and simpler
 */
export class SimpleAuthor {
    /** The ID of the author */
    readonly id: number;
    /** The name of the author */
    readonly name: string;
    /** A link to the author */
    readonly url: string;

    /**
     * @constructor
     * @param author - Author data
     */
    public constructor(author: Author) {
        this.id = author.id;
        this.name = author.name;
        this.url = author.url;
    }
}

/**
 * Represents a attachment but smaller and simpler
 */
export class SimpleAttachment {
    /** The ID of the attachment */
    readonly id: number;
    /** The name of the attachment */
    readonly name: string;
    /** A link to the attachment */
    readonly url: string;
    /** A link to the thumbnail attachment */
    readonly thumbnailUrl: string;
    /** Whether or not the attachment is default */
    readonly isDefault: boolean;

    /**
     * @constructor
     * @param attachment - Attachment data
     */
    public constructor(attachment: Attachment) {
        this.id = attachment.id;
        this.name = attachment.title;
        this.url = attachment.url;
        this.thumbnailUrl = attachment.thumbnailUrl;
        this.isDefault = attachment.isDefault;
    }
}

/**
 * Represents a file but smaller and simpler
 */
export class SimpleFile {
    /** The ID of the project */
    readonly projectId: number;
    /** The ID of the file */
    readonly id: number;
    /** The name of the file */
    readonly name: string;
    /** A link to the file */
    url: string | null;
    /** The release type of the file */
    readonly releaseType!: keyof typeof ReleaseType;
    /** The size of the file */
    size: number | null;
    /** The time the file got updated. */
    date: Date | null;
    /** An array of dependencies of the file */
    dependencies: SimpleDependency[] | null;
    /** The supported game version array of the file */
    gameVersion: string[];
    /** Whether or not this file is latest (null when unknown) */
    isLatest: boolean | null;
    /** Whether or not this file is available */
    isAvailable: boolean | null ;
    /** Whether or not this file is a server pack */
    isServerPack: boolean | null;
    /** The ID of the server pack if it is */
    serverPackFileId: number | null;

    /**
     * @constructor
     * @param id - The project ID
     * @param file - The file data to initialize
     * @param latest - Whether or not this file is latest
     */
    public constructor(id: number, file: File | LatestFile[], latest: boolean | null = false) {
        this.isLatest = latest;

        if (file instanceof File) {
            this.projectId = id;
            this.id = file.id;
            this.name = file.fileName;
            this.url = file.downloadUrl;
            this.size = file.fileLength;
            this.date = file.fileDate;
            this.gameVersion = file.gameVersion;
            this.isAvailable = file.isAvailable;
            this.isServerPack = file.isServerPack;
            this.serverPackFileId = file.serverPackFileId;
            this.dependencies = file.dependencies.map(d => new SimpleDependency(d));
        } else {
            this.projectId = id;
            this.id = file[0].projectFileId;
            this.name = file[0].projectFileName;
            this.url = null;
            this.size = null;
            this.date = null;
            this.dependencies = null;
            this.gameVersion = file.map(f => f.gameVersion);
            this.isAvailable = null;
            this.isServerPack = null;
            this.serverPackFileId = null;
        }

        for (const [k, v] of Object.entries(ReleaseType)) {
            if (file instanceof File) {
                if (v === file.releaseType) this.releaseType = k as keyof typeof ReleaseType;
            } else if (v === file[0].fileType) {
                this.releaseType = k as keyof typeof ReleaseType;
            }
        }
    }

    /** Whether this File is a partial */
    public get partial(): boolean {
        return !this.size;
    }

    /** Fetches this File. */
    public async fetch(): Promise<SimpleFile> {
        if (!this.partial) return Object.freeze(this);
        const project = await curseforge.getProjectFileInfo(this.projectId, this.id, false) as File;
        this.url = project.downloadUrl;
        this.size = project.fileLength;
        this.date = project.fileDate;
        this.gameVersion = project.gameVersion;
        this.isAvailable = project.isAvailable;
        this.isServerPack = project.isServerPack;
        this.serverPackFileId = project.serverPackFileId;
        this.dependencies = project.dependencies.map(d => new SimpleDependency(d));
        return Object.freeze(this);
    }

    /**
     * Fetch changelog of this file.
     */
    public getChangelog(): Promise<string> {
        return curseforge.getProjectFileChangelog(this.projectId, this.id);
    }
}

/**
 * Represents a file but smaller and simpler
 */
export class SimpleDependency {
    /** The ID of the project */
    readonly projectId: number;
    /** The ID of the file */
    readonly fileID: number;
    /** The type of the dependency */
    readonly type: ValueOf<typeof DependencyTypes>;

    /**
     * @constructor
     * @param data - Dependency data
     */
    public constructor(data: Dependency) {
        this.projectId = data.addonId;
        this.fileID = data.fileId;
        this.type = data.type;
    }

    /**
     * Fetch project data of the dependency from API.
     * @param simple - Wether or not to make the result simple or want it as is
     */
    public fetchProject(simple = true): Promise<SimpleProject | CFProject> {
        return curseforge.getProject(this.projectId, simple);
    }
}

/**
 * Represents a category but smaller and simpler
 */
export class SimpleCategory {
    /** The ID of the category */
    readonly id: number;
    /** The name of the category */
    readonly name: string;
    /** A link to the category */
    readonly url: string;
    /** A link to this category's icon */
    readonly iconUrl: string;

    /**
     * @constructor
     * @param info - Category data
     */
    public constructor(info: Category) {
        this.id = info.categoryId;
        this.name = info.name;
        this.url = info.url;
        this.iconUrl = info.avatarUrl;
    }
}

/**
 * Represents a section but smaller and simpler
 */
export class SimpleSection {
    /** The ID of the section */
    readonly id: number;
    /** The name of the section */
    readonly name: string;
    /** The ID of the game */
    readonly gameId: number;
    /** The name of the game */
    readonly gameName: string;

    /**
     * @constructor
     * @param info - GameCategory data
     * @param game - The name of the game
     */
    public constructor(info: GameCategory, game: string) {
        this.id = info.packageType;
        this.name = info.name;
        this.gameId = info.gameId;
        this.gameName = game;
    }
}
