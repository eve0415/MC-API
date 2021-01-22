import axios from 'axios';
import { Game } from '../..';
import { curseURL } from '../url';

/**
 * Fetch game info.
 * @param id - The game ID
 */
export async function getGameInfo(id: number): Promise<Game> {
    const url = `${curseURL}/game/${id}`;
    const res = await axios.get<Game>(url);
    return new Game(res.data);
}

/**
 * Fetch game list that CurseForge supports.
 * @param supportsAddons - Whether or not to filter if the game supports addon
 */
export async function getGameList(supportsAddons: boolean): Promise<Game[]> {
    const url = `${curseURL}/game`;
    const params = { supportsAddons: supportsAddons };
    const res = await axios.get<Game[]>(url, { params });
    return res.data.map(d => new Game(d));
}

/**
 * Fetch latest time of the last game update.
 */
export async function getGameUpdatedTime(): Promise<Date> {
    const url = `${curseURL}/game/timestamp`;
    const res = await axios.get<string>(url);
    return new Date(res.data);
}
