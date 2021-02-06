import axios from 'axios';
import turndown from 'turndown';
import {
    SearchOptions,
    CFProject,
    Util,
    SortTypes,
    File,
    FeatureOptions,
    ProjectTypeObject,
    FeaturedProject,
    PopularProject,
    UpdatedProject,
    SimpleProject,
} from '../..';
import { IFile, SimpleFile } from '../../typings';
import { curseURL } from '../url';

const formatter = new turndown();

/**
 * Search any project (mods, modpacks, resourcepacks, etc.) that connect to Minecraft from CurseForge.
 * @param option - The options and filter to search for.
 * @param simple - Wether or not to make the result simple or want it as is
 */
export async function searchProject(option?: Partial<SearchOptions>, simple = true): Promise<CFProject[] | SimpleProject[]> {
    const url = `${curseURL}/addon/search`;
    const params = {
        gameId: option?.gameId ?? 432,
        searchFilter: option?.filter,
        sectionId: Util.resolveCategory(option?.category).section,
        categoryId: Util.resolveCategory(option?.category).category,
        pageSize: option?.pageSize,
        sort: SortTypes[option?.sort ?? ''] as number,
        index: option?.index,
        gameVersion: option?.gameVersion ?? '',
    };
    const res = await axios.get<CFProject[]>(url, { params });
    const original = res.data.map(d => new CFProject(d));
    return simple ? original.map(o => o.toSimple()) : original;
}

/**
 * Fetch project data by project ID.
 * @param id - The project ID
 * @param simple - Wether or not to make the result simple or want it as is
 */
export async function getProject(id: number, simple = true): Promise<CFProject | SimpleProject> {
    const url = `${curseURL}/addon/${id}`;
    const res = await axios.get<CFProject>(url);
    const original = new CFProject(res.data);
    return simple ? original.toSimple() : original;
}

/**
 * Fetch multiple project data by project ID.
 * @param id - An array of project ID
 * @param simple - Wether or not to make the result simple or want it as is
 * @returns Return an array of {@link Project}
 */
export async function getMultipleProjects(id: number[], simple = true): Promise<CFProject[] | SimpleProject[]> {
    const url = `${curseURL}/addon`;
    const params = { 'Content-Type': 'application/json' };
    const res = await axios.post<CFProject[]>(url, id, { params });
    const original = res.data.map(d => new CFProject(d));
    return simple ? original.map(o => o.toSimple()) : original;
}

/**
 * Fetch project description. (The main page of the project in CurseForge)
 * @param id - The project ID
 * @returns Return the Markdown strings formatted from html strings.
 */
export async function getProjectDescription(id: number): Promise<string> {
    const url = `${curseURL}/addon/${id}/description`;
    const res = await axios.get(url);
    return formatter.turndown(res.data);
}

/**
 * Fetch project file's data.
 * @param projectId - The project ID
 * @param fileId - The file ID associated with the project ID
 */
export async function getProjectFileInfo(projectId: number, fileId: number): Promise<IFile> {
    const url = `${curseURL}/addon/${projectId}/file/${fileId}`;
    const res = await axios.get<File>(url);
    return new IFile(projectId, res.data);
}

/**
 * Fetch multiple project file datas.
 * @param id - The project ID
 * @param simple - Wether or not to make the result simple or want it as is
 */
export async function getProjectFilesInfo(id: number, simple = true): Promise<File[] | SimpleFile[]> {
    const url = `${curseURL}/addon/${id}/files`;
    const res = await axios.get<File[]>(url);
    const original = res.data.map(d => new File(d));
    return simple ? original.map(o => o.toSimple()) : original;
}

/**
 * Fetch changelog from provided project and file ID.
 * @param projectId - The project ID
 * @param fileId - The file ID associated with the project ID
 * @returns Return the Markdown strings formatted from html strings.
 */
export async function getProjectFileChangelog(projectId: number, fileId: number): Promise<string> {
    const url = `${curseURL}/addon/${projectId}/file/${fileId}/changelog`;
    const res = await axios.get(url);
    return formatter.turndown(res.data);
}

/**
 * Fetch a link to download specified file.
 * @remarks As {@link File.downloadUrl} has a download link, I suppose we do not need this.
 * @param projectId - The project ID
 * @param fileId - The file ID associated with the project ID
 * @returns Return a URL.
 */
export async function getProjectFileLink(projectId: number, fileId: number): Promise<string> {
    const url = `${curseURL}/addon/${projectId}/file/${fileId}/download-url`;
    const res = await axios.get<string>(url);
    return res.data;
}

/**
 * Fetch featured projects.
 * @param option - The filter for featured projects.
 * @returns Return an array of project type arrays
 */
export async function getFeatured(option?: Partial<FeatureOptions>): Promise<[FeaturedProject[], PopularProject[], UpdatedProject[]]> {
    const url = `${curseURL}/addon/featured`;
    const params = { 'Content-Type': 'application/json' };
    const data = {
        gameId: option?.gameId ?? 432,
        addonIds: option?.id ?? [],
        featuredCount: option?.featured ?? 8,
        popularCount: option?.featured ?? 8,
        updatedCount: option?.updated ?? 8,
    };
    const res = await axios.post<ProjectTypeObject>(url, data, { params });
    const featured = res.data.Featured.map((d: CFProject) => new FeaturedProject(d));
    const popular = res.data.Popular.map((d: CFProject) => new PopularProject(d));
    const update = res.data.RecentlyUpdated.map((d: CFProject) => new UpdatedProject(d));
    return [featured, popular, update];
}
