import { Attachment, Author, Category, File, GameCategory, LatestFile, SimpleProject } from '.';

/**
 * Represents a project received from CurseForge
 */
export class CFProject {
    /** The ID of the project */
    readonly id!: number;
    /** The display name of the project */
    readonly name!: string;
    /** An array of authors data */
    readonly authors!: Author[];
    /**  An array of attachments data */
    readonly attachments!: Attachment[];
    /** A link to the project */
    readonly websiteUrl!: string;
    /** A game ID that related to the project */
    readonly gameId!: number;
    /** A short description that explain the project */
    readonly summary!: string;
    /** The default file id of the project */
    readonly defaultFileId!: number;
    /** The amount of downloads of the project */
    readonly downloadCount!: number;
    /** An array of files containing the latest files */
    readonly latestFiles!: File[];
    /** An array of category that link to the project */
    readonly categories!: Category[];
    /** Status (IDK) */
    readonly status!: number;
    /** The primal id of from categories */
    readonly primaryCategoryId!: number;
    /** The project's category infomation */
    readonly categorySection!: GameCategory;
    /** The Curse slug of the project. */
    readonly slug!: string;
    /** An array of latest files name with game version  */
    readonly gameVersionLatestFiles!: LatestFile[];
    /** Whether or not the project is featured */
    readonly isFeatured!: boolean;
    /** The popularity score of the project */
    readonly popularityScore!: number;
    /** The popularity rank of the project */
    readonly gamePopularityRank!: number;
    /** A primary language that the project use */
    readonly primaryLanguage!: string;
    /** The Curse slug of the game that is related to the project */
    readonly gameSlug!: string;
    /** The game name that is related to the project */
    readonly gameName!: string;
    /** www.curseforge.com */
    readonly portalName!: string;
    /** The time the project got updated */
    readonly dateModified: Date;
    /** The time the project got created */
    readonly dateCreated: Date;
    /** The time the project got released */
    readonly dateReleased: Date;
    /** Whether or not the project is available */
    readonly isAvailable!: boolean;
    /** Whether or not the project is experiemental */
    readonly isExperiemental!: boolean;

    /**
     * @constructor
     * @param data - Raw project data
     */
    public constructor(data: CFProject) {
        Object.assign(this, data);
        this.authors = data.authors.map(d => new Author(d));
        this.attachments = data.attachments.map(d => new Attachment(d));
        this.latestFiles = data.latestFiles.map(d => new File(d));
        this.categories = data.categories.map(d => new Category(d));
        this.categorySection = new GameCategory(data.categorySection);
        this.gameVersionLatestFiles = data.gameVersionLatestFiles.map(d => new LatestFile(d));
        this.dateModified = new Date(data.dateModified);
        this.dateCreated = new Date(data.dateCreated);
        this.dateReleased = new Date(data.dateReleased);
    }

    /**
     * Make this data to simple and smaller for common usage.
     */
    public toSimple(): SimpleProject {
        return new SimpleProject(this);
    }
}

/**
 * Represents a featured project
 * @extends Project
 */
export class FeaturedProject extends CFProject { }

/**
 * Represents a popular project
 * @extends Project
 */
export class PopularProject extends CFProject { }

/**
 * Represents a recently updated project
 * @extends Project
 */
export class UpdatedProject extends CFProject { }

/**
 * @ignore
 */
export interface ProjectTypeObject {
    readonly Featured: FeaturedProject[]
    readonly Popular: PopularProject[]
    readonly RecentlyUpdated: UpdatedProject[]
}
