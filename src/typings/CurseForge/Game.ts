import { ValueOf, SectionTypes } from '.';

/**
 * Represents a game data
 */
export class Game {
    /** The ID of the game */
    readonly id!: number;
    /** The name of the game */
    readonly name!: string;
    /** The slug of the game */
    readonly slug!: string;
    /** The time the game got updated */
    readonly dateModified: Date;
    /** An array of the game files */
    readonly gameFiles!: GameFile[];
    /** An array of how to detect games */
    readonly gameDetectionHints!: GameDetection[];
    /** An array of rules to parse files */
    readonly fileParsingRules!: FileParsingRule[];
    /** An array of category sections */
    readonly categorySections!: GameCategory[];
    /** The max free storage */
    readonly maxFreeStorage!: number;
    /** The max premium storage */
    readonly maxPremiumStorage!: number;
    /** The max file of the file */
    readonly maxFileSize!: number;
    /** The filter of the addon settings folder */
    readonly addonSettingsFolderFilter!: string;
    /** The addon settings folder to start */
    readonly addonSettingsStartingFolder!: string;
    /** The filter of addon settings files */
    readonly addonSettingsFileFilter!: string;
    /** The filter to remove addon settings files */
    readonly addonSettingsFileRemovalFilter!: string;
    /** Whether or not the game supports addon */
    readonly supportsAddons!: boolean;
    /** Whether or not the game supports partner addon */
    readonly supportsPartnerAddons!: boolean;
    /** Whether or not the game supports client configuration */
    readonly supportedClientConfiguration!: number;
    /** Whether or not the game supports notifications */
    readonly supportsNotifications!: boolean;
    /** The ID of addon profile */
    readonly profilerAddonId!: number;
    /** The ID of twitch game */
    readonly twitchGameId!: number;
    /** The ID of client's game settings */
    readonly clientGameSettingsId!: number;

    /**
     * @constructor
     * @param data - Raw game file data
     */
    public constructor(data: Game) {
        Object.assign(this, data);
        this.gameFiles = data.gameFiles.map(d => new GameFile(d));
        this.gameDetectionHints = data.gameDetectionHints.map(d => new GameDetection(d));
        this.fileParsingRules = data.fileParsingRules.map(d => new FileParsingRule(d));
        this.categorySections = data.categorySections.map(d => new GameCategory(d));
        this.dateModified = new Date(data.dateModified);
    }
}

/**
 * Represents a game file
 */
export class GameFile {
    /** The ID of the game file */
    readonly id!: number;
    /** The ID of the game */
    readonly gameId!: number;
    /** Whether or not the file is required */
    readonly isRequired!: boolean;
    /** The name of the file */
    readonly fileName!: string;
    /** The type of the file */
    readonly fileType!: number;
    /** The type of the platform */
    readonly platformType!: number;

    /**
     * @constructor
     * @param data - Raw game file data
     */
    public constructor(data: GameFile) {
        Object.assign(this, data);
    }
}

/**
 * Represents a game detection information
 */
export class GameDetection {
    /** The ID of the game detection */
    readonly id!: number;
    /** The type to detect the game */
    readonly hintType!: number;
    /** The path to detect the game */
    readonly hintPath!: string;
    /** The key to detect the game */
    readonly hintKey!: string;
    /** The option to detect the game */
    readonly hintOptions!: number;
    /** The game ID to detect */
    readonly gameId!: number;

    /**
     * @constructor
     * @param data - Raw game detection data
     */
    public constructor(data: GameDetection) {
        Object.assign(this, data);
    }
}

/**
 * Represents a game category
 */
export class GameCategory {
    /** The ID of the category */
    readonly id!: number;
    /** The ID of the game */
    readonly gameId!: number;
    /** The name of the category */
    readonly name!: string;
    /** The package types */
    readonly packageType!: ValueOf<typeof SectionTypes>;
    /** The path to the category */
    readonly path!: string;
    /** The initial inclusion pattern (IDK) */
    readonly initialInclusionPattern!: string;
    /** The extra include pattern*/
    readonly extraIncludePattern!: string;
    /** The ID of the game's category */
    readonly gameCategoryId!: number;

    /**
     * @constructor
     * @param data - Raw game category data
     */
    public constructor(data: GameCategory) {
        Object.assign(this, data);
    }
}

/**
 * Represents a rule of parsing file
 */
export class FileParsingRule {
    /** The pattern to stript the comment */
    readonly commentStripPattern!: string;
    /** The extension of the file */
    readonly fileExtension!: string;
    /** The pattern to include in file parsing */
    readonly inclusionPattern!: string;
    /** The ID of the game */
    readonly gameId!: number;
    /** The ID of the rule */
    readonly id!: number;

    /**
     * @constructor
     * @param data - Raw file parsing rule information
     */
    public constructor(data: FileParsingRule) {
        Object.assign(this, data);
    }
}
