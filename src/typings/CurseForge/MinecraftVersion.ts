/**
 * Represents a Minecraft version data
 */
export class MinecraftVersion {
    /** The serial number of the game version */
    readonly id!: number;
    /** The ID of the game version */
    readonly gameVersionId!: number;
    /** The name of the game version */
    readonly versionString!: string;
    /** A link to download jar file */
    readonly jarDownloadUrl!: string;
    /** A link to download json file */
    readonly jsonDownloadUrl!: string;
    /** Whether or not the game vesion is approved - Always false */
    readonly approved!: boolean;
    /** The time the game version got updated. */
    readonly dateModified: Date;
    /** The type of the game version. */
    readonly gameVersionTypeId!: number;
    /** The status of the game version. */
    readonly gameVersionStatus!: number;
    /** The type status of the game version. */
    readonly gameVersionTypeStatus!: number;

    /**
     * @constructor
     * @param data - Raw minecraft version data
     */
    public constructor(data: MinecraftVersion) {
        Object.assign(this, data);
        this.dateModified = new Date(data.dateModified);
    }
}
