/**
 * A project type
 * - paper - The PaperMC server implementation
 * - travertine - The Waterfall server proxy
 * - waterfall - The Travertine proxy fork
 */
export type ProjectType = 'paper' | 'travertine' | 'waterfall';

/**
 * An array of available projects list returned from PaperMC API
 */
export interface ProjectList {
    /** An array of available projects */
    readonly projects: string[]
}

/** A project data base of Paper */
export interface PaperProjectBase {
    /** The ID of the project */
    readonly project_id: ProjectType
    /** The name of the project */
    readonly project_name: string
}

/** Represents a project of Paper */
export interface PaperProject extends PaperProjectBase {
    /** The version group of the project */
    readonly version_groups: string[]
    /** The available version of the project */
    readonly versions: string[]
}

/** Represents a version data */
export interface PaperVersion extends PaperProjectBase {
    /** The version of the project */
    readonly version: string
    /** The available builds of the version */
    readonly builds: number[]
}

/** Represents a change data */
export interface Change {
    /** A commit hash */
    readonly commit: string
    /** The summary of the commit */
    readonly summary: string
    /** The message of the commit */
    readonly message: string
}

export interface PaperFile {
    /** The name of the file */
    readonly name: string
    /** The sha256 of the file */
    readonly sha256: string
}
