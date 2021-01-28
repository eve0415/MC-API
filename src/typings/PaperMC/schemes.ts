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
    readonly project_id: string
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

export interface Changes {
    readonly commit: string
    readonly summary: string
    readonly message: string
}

export interface PaperFile {
    readonly name: string
    readonly sha256: string
}
