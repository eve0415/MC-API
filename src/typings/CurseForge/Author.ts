/**
 * Represents an author on CurseForge.
 */
export class Author {
    /** The name of the author */
    readonly name!: string;
    /** A link to the author's profile. */
    readonly url!: string;
    /** The ID of the project that is connected to the author */
    readonly projectId!: number;
    /** The ID of the author */
    readonly id!: number;
    /** Always null */
    readonly projectTitleId!: number;
    /** Always null */
    readonly projectTitleTitle!: string;
    /** The user ID of the author */
    readonly userId!: number;
    /** The Twitch ID of the author */
    readonly twitchId!: number;

    /**
     * @constructor
     * @param data - Raw author data
     */
    public constructor(data: Author) {
        Object.assign(this, data);
    }
}
