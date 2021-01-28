import { mojang } from '../..';

/**
 * Represents a player data
 */
export class Player implements UUIDresponse {
    /** The UUID of the player */
    readonly id: string;
    /** The name of the player */
    readonly name: string;
    /** Whether or not the player has migrated to mojang.com */
    readonly legacy?: boolean;
    /** The skin data of the player */
    skin!: Skin;

    /**
     * @constructor
     * @param data - Player data
     */
    public constructor(data: UUIDresponse) {
        this.id = data.id;
        this.name = data.name;
        this.legacy = data.legacy ?? false;
    }

    /**
     * Fetch player name history
     */
    public getNameHistory(): Promise<string> {
        return mojang.getNameHistory(this.id);
    }

    /**
     * Fetch skin data
     */
    public async getSkin(): Promise<Skin> {
        this.skin = await mojang.getSkin(this.id);
        return this.skin;
    }
}

/**
 * Represents a skin data
 */
export class Skin {
    /** The UUID of the player */
    readonly id: string;
    /** The name of the player */
    readonly name: string;
    /** The type of the skin */
    readonly type: 'steve' | 'alex';
    /** A link to the skin texture */
    readonly skin: string | null;
    /** A link to the cape texture */
    readonly cape: string | null;

    /**
     * @constructor
     * @param data - Skin data
     */
    public constructor(data: SkinResponse) {
        const buffer = Buffer.from(data.properties[0].value, 'base64');
        const info = JSON.parse(buffer.toString()) as decodedSkinData;
        const skinType = parseInt(data.id[7], 16) ^
                        parseInt(data.id[15], 16) ^
                        parseInt(data.id[23], 16) ^
                        parseInt(data.id[31], 16);

        this.id = data.id;
        this.name = data.name;
        this.type = skinType ? 'alex' : 'steve';
        this.skin = info.textures.SKIN?.url ?? null;
        this.cape = info.textures.CAPE?.url ?? null;
    }
}

/**
 * Represents a reponse of fetching UUID from player name
 * @internal
 */
export interface UUIDresponse {
    /** The UUID */
    readonly id: string
    /** The player name */
    readonly name: string
    /** Whether or not the user has migrated to mojang.com */
    readonly legacy?: boolean
}

/**
 * Represents a reponse of fetching skins and capes of the player
 * @internal
 */
export interface SkinResponse {
    /** The UUID */
    readonly id: string
    /** The player name */
    readonly name: string
    /** The properties that includes skins and capes info */
    readonly properties: [{
        /** Always textures */
        readonly name: 'textures'
        /** The base64 string */
        readonly value: string
    }],
}

/**
 * Represents a decoded skin data from base string
 * @internal
 */
interface decodedSkinData {
    /** The UUID */
    readonly profileId: string
    /** The player name */
    readonly profileName: string
    /** The timestamp */
    readonly timestamp: number
    /** The textures including skin anc cape links */
    readonly textures: {
        /** If player set their custom skin */
        readonly SKIN?: {
            /** A link to the skin texture */
            readonly url: string
        }
        /** If player set their custom cape */
        readonly CAPE?: {
            /** A link to the cape texture */
            readonly url: string
        }
    }
}
