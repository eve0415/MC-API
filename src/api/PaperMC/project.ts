import { createWriteStream } from 'fs';
import { resolve } from 'path';
import { Stream } from 'stream';
import axios from 'axios';
import { PaperBuild, PaperProject, PaperVersion, ProjectList, ProjectType, VersionGroupProject } from '../..';
import { papermcAPI } from '../url';

/**
 * Get a list of all available projects.
 * @returns An array of available projects. {@link ProjectType}
 */
export async function getProjectList(): Promise<ProjectList> {
    const url = `${papermcAPI}/projects`;
    const res = await axios.get<ProjectList>(url);
    return res.data;
}

/**
 * Get information about a project.
 * @param project - A project name
 */
export async function getProject(project: ProjectType): Promise<PaperProject> {
    const url = `${papermcAPI}/projects/${project}`;
    const res = await axios.get<PaperProject>(url);
    return res.data;
}

/**
 * Get information about a version group.
 * @param project - A project name
 * @param version - A version group (1.16, 1.12)
 */
export async function getVersionGroup(project: ProjectType, version: string): Promise<VersionGroupProject> {
    const url = `${papermcAPI}/projects/${project}/version_group/${version}`;
    const res = await axios.get<VersionGroupProject>(url);
    return new VersionGroupProject(res.data);
}

/**
 * Get all available builds for a version group.
 * @param project - A project name
 * @param version - A version group (1.16, 1.12)
 */
export async function getVersionGroupBuilds(project: ProjectType, version: string): Promise<VersionGroupProject> {
    const url = `${papermcAPI}/projects/${project}/version_group/${version}/builds`;
    const res = await axios.get<VersionGroupProject>(url);
    return new VersionGroupProject(res.data);
}

/**
 * Get information about a version.
 * @param project - A project name
 * @param version - A version (1.16.5, 1.12.2)
 */
export async function getVersion(project: ProjectType, version: string): Promise<PaperVersion> {
    const url = `${papermcAPI}/projects/${project}/versions/${version}`;
    const res = await axios.get<PaperVersion>(url);
    return res.data;
}

/**
 * Get a specific build information
 * @param project - A project name
 * @param version - A version (1.16.5, 1.12.2)
 * @param build - A build number
 */
export async function getBuild(project: ProjectType, version: string, build: number): Promise<PaperBuild> {
    const url = `${papermcAPI}/projects/${project}/versions/${version}/builds/${build}`;
    const res = await axios.get<PaperBuild>(url);
    return new PaperBuild(res.data);
}

/**
 * Download a build to specific folder.
 * @param project - A project name
 * @param version - A version (1.16.5, 1.12.2)
 * @param build - A build number
 * @param fileName - A file name
 * @param dir - A directory path to save the file ("jar/")
 * @returns A full path to the file
 */
export async function download(project: ProjectType, version: string, build: number, fileName: string, dir: string): Promise<string> {
    const url = `${papermcAPI}/projects/${project}/versions/${version}/builds/${build}/downloads/${fileName}`;
    const path = resolve(dir, fileName);
    const writer = createWriteStream(path);
    const response = await axios.get<Stream>(url, { responseType: 'stream' });
    response.data.pipe(writer);

    return new Promise((res, rej) => {
        writer.on('finish', () => res(path));
        writer.on('error', err => rej(err));
    });
}
