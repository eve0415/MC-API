import { DependencyTypes, CFProject, ReleaseType, SimpleFile, SimpleProject, ValueOf } from '.';
import { curseforge } from '../..';

/**
 * Represents a file of a project.
 */
export class File {
    /** The ID of the file */
    readonly id!: number;
    /** The display name of the file */
    readonly displayName!: string;
    /** The file name of the file */
    readonly fileName!: string;
    /** The time the file got updated. */
    readonly fileDate: Date;
    /** The size of the file. */
    readonly fileLength!: number;
    /** The release type of the file */
    readonly releaseType!: ValueOf<typeof ReleaseType>;
    /** The status of the file. */
    readonly fileStatus!: number;
    /** A link to download */
    readonly downloadUrl!: string;
    /** Whether or not the file is alternate */
    readonly isAlternate!: boolean;
    /** The ID of the alternate file */
    readonly alternateFileId!: number;
    /** An array of dependencies */
    readonly dependencies!: Dependency[];
    /** Whether or not the file is available */
    readonly isAvailable!: boolean;
    /** An array of modules / file content */
    readonly modules!: Module[];
    /** The fingerprint of the package */
    readonly packageFingerprint!: number;
    /** The array of aimed game version of the file */
    readonly gameVersion!: string[];
    /** An array of sortable game version of the file */
    readonly sortableGameVersion!: GameVersion[];
    /**
     * The meta data of the file
     * @remarks Always null
     */
    readonly installMetadata!: string;
    /**
     * The changelog of the file
     * @remarks
     * If you want the changelog use {@link getChangelog}
     */
    readonly changelog!: string;
    /** Whether or not the file has install script */
    readonly hasInstallScript!: boolean;
    /** Whether or not the file is compatible with client */
    readonly isCompatibleWithClient!: boolean;
    /** The category type of the file */
    readonly categorySectionProjectType!: number;
    /** The restriction access type of the file */
    readonly restrictProjectFileAccess!: number;
    /** The project status of the file */
    readonly projectStatus!: number;
    /** The render cache ID of the file */
    readonly renderCacheId!: number;
    /** The legacy mapping ID of the file */
    readonly fileLegacyMappingId!: number;
    /** The project ID of the file */
    readonly projectId!: number;
    /** The parent project ID of the file */
    readonly parentProjectFileId!: number;
    /** The parent mapping ID of the file */
    readonly parentFileLegacyMappingId!: number;
    /** The type of the file */
    readonly fileTypeId!: number;
    /** Whether or not the file is expose as alternative */
    readonly exposeAsAlternative!: boolean;
    /** The fingerprint ID of the project */
    readonly projectFingerprintId!: number;
    /** The time the version was reased at */
    readonly gameVersionDateReleased: Date;
    /** The ID of the game version mapping. */
    readonly gameVersionMappingId!: number;
    /** The ID of the game version */
    readonly gameVersionId!: number;
    /** The ID of the game */
    readonly gameId!: number;
    /** Whether or not the file is for server */
    readonly isServerPack!: boolean;
    /** The ID of the server pack */
    readonly serverPackFileId!: number;
    /** Always null */
    readonly gameVersionFlavor!: string;

    /**
     * @constructor
     * @param data - Raw file data
     */
    public constructor(data: File) {
        console.log(data);
        Object.assign(this, data);
        this.dependencies = data.dependencies.map(d => new Dependency(d));
        this.modules = data.modules.map(d => new Module(d));
        this.sortableGameVersion = data.sortableGameVersion.map(d => new GameVersion(d));
        this.fileDate = new Date(data.fileDate);
        this.gameVersionDateReleased = new Date(data.gameVersionDateReleased);
    }

    /**
     * Make this data to simple and smaller for common usage.
     */
    public toSimple(): SimpleFile {
        return new SimpleFile(this.projectId, this, null);
    }

    /**
     * Fetch changelog of this file.
     */
    public getChangelog(): Promise<string> {
        return curseforge.getProjectFileChangelog(this.projectId, this.id);
    }
}

/**
 * Represents a latest version of a file.
 */
export class LatestFile {
    /** The game version */
    readonly gameVersion!: string;
    /** The ID of the project that is connected to the file */
    readonly projectFileId!: number;
    /** The name of the project that is connected to the file */
    readonly projectFileName!: string;
    /** The type of the folder or file */
    readonly fileType!: number;
    /** Always null */
    readonly gameVersionFlavor!: string;

    /**
     * @constructor
     * @param data - Raw latest file data
     */
    public constructor(data: LatestFile) {
        Object.assign(this, data);
    }
}

/**
 * Represents a dependency of a file.
 */
export class Dependency {
    /** The ID of the dependency */
    readonly id!: number;
    /** The addon ID of the dependency */
    readonly addonId!: number;
    /** The type of the dependency */
    readonly type!: ValueOf<typeof DependencyTypes>;
    /** The file ID of the dependency */
    readonly fileId!: number;

    /**
     * @constructor
     * @param data - Raw dependency data
     */
    public constructor(data: Dependency) {
        Object.assign(this, data);
    }

    /**
     * Fetch project data of the dependency from API.
     * @param simple - Wether or not to make the result simple or want it as is
     */
    public fetchProject(simple = true): Promise<CFProject | SimpleProject> {
        return curseforge.getProject(this.addonId, simple);
    }
}

/**
 * Represents a module of a file.
 * @remarks The content of a file.
 */
export class Module {
    /** The name of the folder or file */
    readonly foldername!: string;
    /** The fingerprint of the folder or file */
    readonly fingerprint!: number;
    /** The type of the folder or file */
    readonly type!: number;

    /**
     * @constructor
     * @param data - Raw module data
     */
    public constructor(data: Module) {
        Object.assign(this, data);
    }
}

/**
 * Represents a game version of a file.
 */
export class GameVersion {
    /** I don't know what this is used for */
    readonly gameVersionPadded!: string;
    /** The game version */
    readonly gameVersion!: string;
    /** The time the version was reased at */
    readonly gameVersionReleaseDate: Date;
    /** The name of the game version */
    readonly gameVersionName!: string;

    /**
     * @constructor
     * @param data - Raw game version data
     */
    public constructor(data: GameVersion) {
        Object.assign(this, data);
        this.gameVersionReleaseDate = new Date(data.gameVersionReleaseDate);
    }
}
