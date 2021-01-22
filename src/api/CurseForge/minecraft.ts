import axios from 'axios';
import { MinecraftVersion } from '../..';
import { curseURL } from '../url';

/**
 * Fetch minecraft version info.
 * @param version - The game version
 * @example 1.12.2
 * @example 1.7.10
 */
export async function getMinecraftVersionInfo(version: string): Promise<MinecraftVersion> {
    const url = `${curseURL}/minecraft/version/${version}`;
    const res = await axios.get<MinecraftVersion>(url);
    return new MinecraftVersion(res.data);
}

/**
 * Fetch minecraft version list.
 */
export async function getMinecraftVersionList(): Promise<MinecraftVersion[]> {
    const url = `${curseURL}/minecraft/version`;
    const res = await axios.get<MinecraftVersion[]>(url);
    return res.data.map(d => new MinecraftVersion(d));
}

/**
 * Fetch latest time of the last minecraft update.
 */
export async function getMinecraftUpdatedTime(): Promise<Date> {
    const url = `${curseURL}/minecraft/version/timestamp`;
    const res = await axios.get<string>(url);
    return new Date(res.data);
}
