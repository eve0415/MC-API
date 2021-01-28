import { Changes, PaperFile, PaperProjectBase } from '.';


/**
 * Represents a Paper project with version groups data
 */
export class VersionGroupProject implements PaperProjectBase {
    readonly project_id!: string;
    readonly project_name!: string;
    readonly version_groups!: string[];
    readonly versions!: string[];
    builds: VersionGroupBuild[] | null;

    /**
     * @constructor
     * @param data - Raw project data
     */
    public constructor(data: VersionGroupProject) {
        Object.assign(this, data);
        this.builds = data.builds?.map(d => new VersionGroupBuild(d)) ?? null;
    }
}

export class VersionGroupBuild {
    readonly version!: string;
    readonly build!: number;
    readonly time: Date;
    readonly changes!: Changes[];
    readonly downloads!: {
        readonly application: PaperFile[];
    };

    /**
     * @constructor
     * @param data - Raw version group's build data
     */
    public constructor(data: VersionGroupBuild) {
        Object.assign(this, data);
        this.time = new Date(data.time);
    }
}
