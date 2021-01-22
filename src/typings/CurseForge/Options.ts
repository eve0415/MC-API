import { SectionAndCategoryResolvable, SortTypes } from '.';

/**
 * Options for searching any projects (mods, modpacks, resourcepacks, etc.) that connect to Minecraft from CurseForge.
 */
export interface SearchOptions {
    /**
     * The game ID that you would like to search
     * @default 432 - Minecraft
     */
    gameId: number
    /** Term to search for. */
    filter: string
    /** A category ID or name to specify search conditions. */
    category: SectionAndCategoryResolvable
    /** The page to use. */
    index: number
    /** The amount of items to show. (Limit 500) */
    pageSize: number
    /** How to sort the result */
    sort: keyof typeof SortTypes
    /**
     * The Minecraft version string to use.
     * @example "1.7.10"
     * @example "1.12.2"
     * */
    gameVersion: string
}

/**
 * Options for fetching featured projects from CurseForge.
 */
export interface FeatureOptions {
    /**
     * The game ID that you would like to search
     * @default 432 - Minecraft
     */
    gameId: number
    /** An array of project ID. */
    id: number[]
    /**
     * A number of projects that are featured
     * @default 8
     */
    featured: number
    /**
     * A number of projects that are popular
     * @default 8
     */
    popular: number
    /**
     * A number projects that were recently updated
     * @default 8
     */
    updated: number
}
