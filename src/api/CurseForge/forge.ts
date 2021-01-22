import axios from 'axios';
import { ModLoaderInfo, ModLoaderVersion } from '../..';
import { curseURL } from '../url';

/**
 * Fetch mod loader version info.
 * @param version - The game version
 * @example forge-14.23.5.2854
 * @example forge-10.13.4.1614
 */
export async function getModLoaderInfo(version: string): Promise<ModLoaderInfo> {
    const url = `${curseURL}/minecraft/modloader/${version}`;
    const res = await axios.get<ModLoaderInfo>(url);
    return new ModLoaderInfo(res.data);
}

/**
 * Fetch mod loader version list.
 */
export async function getModLoaderVersionList(): Promise<ModLoaderVersion[]> {
    const url = `${curseURL}/minecraft/modloader`;
    const res = await axios.get<ModLoaderVersion[]>(url);
    return res.data.map(d => new ModLoaderVersion(d));
}

/**
 * Fetch latest time of the last Forge mod loader update.
 */
export async function getModLoaderUpdatedTime(): Promise<Date> {
    const url = `${curseURL}/minecraft/modloader/timestamp`;
    const res = await axios.get<string>(url);
    return new Date(res.data);
}
