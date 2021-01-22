/**
 * Represents an attachment of a project.
 */
export class Attachment {
    /** The ID of the attachment */
    readonly id!: number;
    /** The ID of the project that is connected to the attachment */
    readonly projectId!: number;
    /** The description of the attachment */
    readonly description!: string;
    /** Whether or not the attachment is default */
    readonly isDefault!: boolean;
    /** A link to the thumbnail */
    readonly thumbnailUrl!: string;
    /** The title of the attachment */
    readonly title!: string;
    /** A link to the attachment */
    readonly url!: string;
    /** The status of the attachment */
    readonly status!: number;

    /**
     * @constructor
     * @param data - Raw attachment data
     */
    public constructor(data: Attachment) {
        Object.assign(this, data);
    }
}
