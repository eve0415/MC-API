/**
 * Represents a category of a project.
 */
export class Category {
    /** The ID of the category */
    readonly categoryId!: number;
    /** The name of the category */
    readonly name!: string;
    /** A link to the category */
    readonly url!: string;
    /** A link to the category's avatar. */
    readonly avatarUrl!: string;
    /** The ID of the parent's category */
    readonly parentId!: number;
    /** The ID of the root's category */
    readonly rootId!: number;
    /** The ID of the project that is connected to the category */
    readonly projectId!: number;
    /** The ID of the category's avatar */
    readonly avatarId!: number;
    /** The ID of the game that is connected to the category */
    readonly gameId!: number;

    /**
     * @constructor
     * @param data - Raw category data
     */
    public constructor(data: Category) {
        Object.assign(this, data);
    }
}

/**
 * Represents a category information.
 */
export class CategoryInfo {
    /** The ID of the category */
    readonly id!: number;
    /** The name of the category */
    readonly name!: string;
    /** The slug of the category */
    readonly slug!: string;
    /** A link to the category's avatar. */
    readonly avatarUrl!: string;
    /** The time the category got updated. */
    readonly dateModified: Date;
    /** The ID of the parent's category */
    readonly parentGameCategoryId!: number;
    /** The ID of the root's category */
    readonly rootGameCategoryId!: number;
    /** The ID of the game that is connected to the category */
    readonly gameId!: number;

    /**
     * @constructor
     * @param data - Raw category information data
     */
    public constructor(data: CategoryInfo) {
        Object.assign(this, data);
        this.dateModified = new Date(data.dateModified);
    }
}
