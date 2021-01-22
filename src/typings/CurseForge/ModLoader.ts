/**
 * Represents a ModLoader version data
 */
export class ModLoaderVersion {
    /** The name of the forge */
    readonly name!: string;
    /** The version of the mod loader */
    readonly gameVersion!: string;
    /** Whether or not the mod loader vesion is latest */
    readonly latest!: boolean;
    /** Whether or not the mod loader vesion is recommended */
    readonly recommended!: boolean;
    /** The time the mod loader version got updated. */
    readonly dateModified: Date;

    /**
     * @constructor
     * @param data - Raw mod loader version data
     */
    public constructor(data: ModLoaderVersion) {
        Object.assign(this, data);
        this.dateModified = new Date(data.dateModified);
    }
}

/**
 * Represents a ModLoader version information data
 */
export class ModLoaderInfo {
    /** The ID of the mod loader */
    readonly id!: number;
    /** The ID of the game version that mod loader supports */
    readonly gameVersionId!: number;
    /** The ID of the minecraft game version that mod loader supports */
    readonly minecraftGameVersionId!: string;
    /** The version of the forge */
    readonly forgeVersion!: string;
    /** The name of the forge */
    readonly name!: string;
    /** The type of the forge */
    readonly type!: number;
    /** A link to download the forge file */
    readonly downloadUrl!: string;
    /** The name of the forge file */
    readonly filename!: string;
    /** The method to install the forge file */
    readonly installMethod!: number;
    /** Whether or not the mod loader vesion is latest */
    readonly latest!: boolean;
    /** Whether or not the mod loader vesion is recommended */
    readonly recommended!: boolean;
    /** Whether or not the game vesion is approved - Always false */
    readonly approved!: boolean;
    /** The time the mod loader version got updated. */
    readonly dateModified: Date;
    /** The path to the maven file */
    readonly mavenVersionString!: string;
    /** The mod loader file data */
    readonly versionJson!: ModLoaderFile;
    /** The location to install libraries (Probably used for client) */
    readonly librariesInstallLocation!: string;
    /** The name of the minecraft game version */
    readonly minecraftVersion!: string;
    /** The additional version data */
    readonly additionalFilesJson!: string;
    /** The ID of the mod loader game version */
    readonly modLoaderGameVersionId!: number;
    /** The type of the mod loader game version. */
    readonly modLoaderGameVersionTypeId!: number;
    /** The status of the mod loader game version. */
    readonly modLoaderGameVersionStatus!: number;
    /** The type status of the mod loader game version. */
    readonly modLoaderGameVersionTypeStatus!: number;
    /** The ID of the game version */
    readonly mcGameVersionId!: number;
    /** The type of the game version. */
    readonly mcGameVersionTypeId!: number;
    /** The status of the game version. */
    readonly mcGameVersionStatus!: number;
    /** The type status of the game version. */
    readonly mcGameVersionTypeStatus!: number;
    /** The install profile data */
    readonly installProfileJson!: Profile;

    /**
     * @constructor
     * @param data - Raw modloader version information data
     */
    public constructor(data: ModLoaderInfo) {
        Object.assign(this, data);
        this.versionJson = new ModLoaderFile(JSON.parse(data.versionJson as unknown as string));
        this.installProfileJson = new Profile(JSON.parse(data.installProfileJson as unknown as string));
        this.dateModified = new Date(data.dateModified);
    }
}

export class ModLoaderFile {
    /** The name of the forge */
    readonly id!: string;
    /** The time of the release */
    readonly time!: Date;
    /** The time of the release */
    readonly releaseTime: Date;
    /** The type of the forge */
    readonly type!: string;
    /** The arguments to pass to minecraft */
    readonly minecraftArguments!: string;
    /** The minimum version that can launch */
    readonly minimumLauncherVersion!: number;
    /** The version that inferits from */
    readonly inheritsFrom!: string;
    /** The name of the jar file */
    readonly jar!: string;
    /** An array of libraries */
    readonly libraries!: Library[];
    /** The name of main class */
    readonly mainClass!: string;

    /**
     * @constructor
     * @param data - Raw modloader file data
     */
    public constructor(data: ModLoaderFile) {
        Object.assign(this, data);
        this.libraries = data.libraries.map(d => new Library(d));
        this.releaseTime = new Date(data.releaseTime);
    }
}

/**
 * Represents a Minecraft profile data
 */
export class Profile {
    /** A comment of the profile */
    readonly _comment_!: string[];
    /** The name of the profile */
    readonly profile!: string;
    /** The version name of the profile */
    readonly version!: string;
    /** The path to version.json */
    readonly json!: string;
    /** The path to the maven file */
    readonly path!: string;
    /** The path to the logo file */
    readonly logo!: string;
    /** The version of the minecraft */
    readonly minecraft!: string;
    /** A welcome string */
    readonly welcome!: string;
    /** Some kinds of data */
    readonly data = {};
    /** Processors with an empty array */
    readonly processors!: unknown[];
    /** An array of libraries */
    readonly libraries!: Library[];

    /**
     * @constructor
     * @param data - Raw minecraft profile data
     */
    public constructor(data: Profile) {
        Object.assign(this, data);
        this.libraries = data.libraries.map(d => new Library(d));
    }
}

/**
 * Represents a library data of file
 */
export class Library {
    /** The path to the maven file */
    readonly name!: string;
    /** The path to the artifact */
    readonly download!: Artifact[];

    /**
     * @constructor
     * @param data - Raw mod loader library data
     */
    public constructor(data: Library) {
        Object.assign(this, data);
        this.download = data.download.map(d => new Artifact(d));
    }
}

export class Artifact {
    /** The path to the artifact */
    readonly path!: string;
    /** A link to the artifact */
    readonly url!: string;
    /** Artifact sha1 */
    readonly sha1!: string;
    /** The size of artifact */
    readonly size!: number;

    /**
     * @constructor
     * @param data - Raw mod loader library's artifact data
     */
    public constructor(data: Artifact) {
        Object.assign(this, data);
    }
}
