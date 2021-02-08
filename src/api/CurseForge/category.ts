import axios from 'axios';
import { CategoryInfo, CategoryResolvable, SectionResolvable, Util } from '../..';
import { curseURL } from '../url';

/**
 * Fetch section's category list.
 * @param id - A section ID or name
 */
export async function getSectionCategoryList(id: SectionResolvable): Promise<CategoryInfo[]> {
    const sectionID = Util.resolveCategory(id).section;
    const url = `${curseURL}/category/section/${sectionID}`;
    const res = await axios.get<CategoryInfo[]>(url);
    return res.data.map(d => new CategoryInfo(d));
}

/**
 * Fetch category info.
 * @param id - A category ID or name
 */
export async function getCategoryInfo(id: CategoryResolvable): Promise<CategoryInfo> {
    const categoryID = Util.resolveCategory(id).category;
    const url = `${curseURL}/category/${categoryID}`;
    const res = await axios.get<CategoryInfo>(url);
    return new CategoryInfo(res.data);
}

/**
 * Fetch all sections and categories that are connected to Game ID.
 * @param id - The game ID
 * @default 432 - Minecraft
 */
export async function getCategoriesList(id = 432): Promise<CategoryInfo[]> {
    const url = `${curseURL}/category`;
    const params = { gameId: id };
    const res = await axios.get<CategoryInfo[]>(url, { params });
    return res.data.map(d => new CategoryInfo(d));
}

/**
 * Fetch latest time of the last category or section update.
 */
export async function getCategoryUpdatedTime(): Promise<Date> {
    const url = `${curseURL}/category/timestamp`;
    const res = await axios.get<string>(url);
    return new Date(res.data);
}
