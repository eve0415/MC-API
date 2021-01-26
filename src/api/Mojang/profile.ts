import axios from 'axios';
import { UUIDresponse, Player, SkinResponse } from '../..';
import { Skin } from '../../typings';
import { mojangAPI, mojangProfile } from '../url';

/**
 * Fetch UUID by player name
 * @param name - The player name
 * @throws Throw an Error when no player found
 */
export async function getUUID(name: string): Promise<Player> {
    const url = `${mojangAPI}/users/profiles/minecraft/${name}`;
    const res = await axios.get<UUIDresponse>(url);
    if (res.status === 204) throw new Error('Cannot find player');
    return new Player(res.data);
}

/**
 * Fetch multiple UUIDs by player names
 * @param name - An array of player name (max 10 per request)
 * @throws When trying to request more than 10 players at a time
 */
export async function getMultipleUUIDs(name: string[]): Promise<Player[]> {
    if (name.length > 10) throw new TypeError('You can not request more than 10 player names');
    const url = `${mojangAPI}/profiles/minecraft`;
    const res = await axios.post<UUIDresponse[]>(url, name);
    return res.data.map(d => new Player(d));
}

/**
 * Fetch player name history
 * @param uuid - The UUID of the player
 */
export async function getNameHistory(uuid: string): Promise<string> {
    const url = `${mojangAPI}/user/profiles/${uuid}/names`;
    const res = await axios.get<string>(url);
    return res.data;
}

/**
 * Fetch player skins and capes
 * @param uuid  - The UUID of the player
 */
export async function getSkin(uuid: string): Promise<Skin> {
    const url = `${mojangProfile}/${uuid}`;
    const res = await axios.get<SkinResponse>(url);
    return new Skin(res.data);
}
