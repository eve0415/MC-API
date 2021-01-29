import { Change, PaperFile, PaperProjectBase } from '.';
import { ProjectType } from './schemes';
import { paper } from '../../api';

/**
 * Represents a Paper project with version groups data
 */
export class VersionGroupProject implements PaperProjectBase {
    readonly project_id!: ProjectType;
    readonly project_name!: ProjectType;
    readonly version_group!: string;
    readonly versions!: string[];
    builds: VersionGroupBuild[] | null;

    /**
     * @constructor
     * @param data - Raw Paper project with version groups data
     */
    public constructor(data: VersionGroupProject) {
        Object.assign(this, data);
        this.builds = data.builds?.map(d => new VersionGroupBuild(d, this.project_id)) ?? null;
        if (this.builds) Object.freeze(this);
    }

    public async getBuilds(): Promise<VersionGroupBuild[]> {
        if (this.builds) return this.builds;
        const res = await paper.getVersionGroupBuilds(this.project_name, this.version_group);
        this.builds = res.builds as VersionGroupBuild[];
        Object.freeze(this);
        return this.builds;
    }
}

export class VersionGroupBuild {
    private readonly project_id: ProjectType;
    readonly version!: string;
    readonly build!: number;
    readonly time: Date;
    readonly changes!: Change[];
    readonly downloads!: {
        readonly application: PaperFile;
    };

    /**
     * @constructor
     * @param data - Raw version group's build data
     */
    public constructor(data: VersionGroupBuild, id: ProjectType) {
        Object.assign(this, data);
        this.project_id = id;
        this.time = new Date(data.time);
    }

    /**
     * Download a build to specific folder.
     * @param dir - A directory path to save the file ("jar/")
     * @returns A full path to the file
     */
    public download(dir: string): Promise<string> {
        return paper.download(this.project_id, this.version, this.build, this.downloads.application.name, dir);
    }
}

export class PaperBuild implements PaperProjectBase {
    readonly project_id!: ProjectType;
    readonly project_name!: string;
    readonly version!: string;
    readonly build!: number;
    readonly time: Date;
    readonly changes!: Change[];
    readonly downloads!: { readonly application: PaperFile; };

    /**
     * @constructor
     * @param data - Raw build data
     */
    public constructor(data: PaperBuild) {
        Object.assign(this, data);
        this.time = new Date(data.time);
    }

    /**
     * Download a build to specific folder.
     * @param dir - A directory path to save the file ("jar/")
     * @returns A full path to the file
     */
    public download(dir: string): Promise<string> {
        return paper.download(this.project_id, this.version, this.build, this.downloads.application.name, dir);
    }
}
