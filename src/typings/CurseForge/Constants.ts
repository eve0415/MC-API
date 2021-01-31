import { ValueOf } from '.';

/**
 * Can be a name or ID number of section or category
 */
export type SectionAndCategoryResolvable = SectionResolvable | CategoryResolvable;

/**
 * Can be a name or ID number of section
 */
export type SectionResolvable = keyof typeof SectionTypes | ValueOf<typeof SectionTypes>;

/**
 * Can be a name or ID number of category
 */
export type CategoryResolvable = CategoryNameList | CategoryIdList;

/**
 * A list of category and section name
 */
export type CategoryNameList =
    keyof typeof BukkitCategoryTypes
    | keyof typeof WorldCategoryTypes
    | keyof typeof ResourceCategoryTypes
    | keyof typeof ModsCategoryTypes
    | keyof typeof ModPacksCategoryTypes
    | keyof typeof CustomCategoryTypes
    | keyof typeof AddonCategoryTypes;

/**
 * A list of category and section ID
 */
export type CategoryIdList =
    ValueOf<typeof BukkitCategoryTypes>
    | ValueOf<typeof WorldCategoryTypes>
    | ValueOf<typeof ResourceCategoryTypes>
    | ValueOf<typeof ModsCategoryTypes>
    | ValueOf<typeof ModPacksCategoryTypes>
    | ValueOf<typeof CustomCategoryTypes>
    | ValueOf<typeof AddonCategoryTypes>;

export const SectionTypes = {
    BUKKIT: 5,
    MOD: 6,
    RESOURCE: 12,
    WORLD: 17,
    MODPACK: 4471,
    CUSTOMIZATION: 4546,
    ADDON: 4559,
} as const;

const BukkitCategoryTypes = {
    ADMIN: 115,
    ANTIGRIEF: 116,
    CHAT: 117,
    DEVELOPER: 122,
    ECONOMY: 123,
    WORLDMANAGE: 124,
    FIXES: 125,
    FUN: 126,
    GENERAL: 127,
    INFO: 128,
    MECHANICS: 129,
    WEBSITE: 130,
    WORLDGEN: 131,
    ROLE: 132,
    MISCELLANEOUS: 133,
    TELEPORT: 134,
    TWITCH: 4672,
} as const;

const WorldCategoryTypes = {
    ADVENTURE: 248,
    CREATION: 249,
    GAMEMAP: 250,
    PARKOUR: 251,
    PUZZLE: 252,
    SURVIVAL: 253,
    MODDED: 4464,
} as const;

const ResourceCategoryTypes = {
    SIXTEEN: 393,
    THIRTYTWO: 394,
    SIXTYFOUR: 395,
    ONETWENTYEIGHT: 396,
    TWOFIFTYSIX: 397,
    FIVETWELVE: 398,
    STEAMPUNK: 399,
    PHOTO: 400,
    MODERN: 401,
    MEDIEVAL: 402,
    TRADITIONAL: 403,
    ANIMATED: 404,
    MISCELLANEOUS: 405,
    MOD: 4465,
} as const;

const ModsCategoryTypes = {
    WORLDGEN: 406,
    BIOMES: 407,
    RESOURCES: 408,
    STRUCTURES: 409,
    DIMENSIONS: 410,
    MOBS: 411,
    TECH: 412,
    PROCESSING: 413,
    PLAYERTRANSPORT: 414,
    OTHERTRANSPORT: 415,
    FARMING: 416,
    ENERGY: 417,
    GENETICS: 418,
    MAGIC: 419,
    STORAGE: 420,
    LIBRARY: 421,
    ADVENTURE: 422,
    MAPANDINFO: 423,
    COSMETIC: 424,
    MISCELLANEOUS: 425,
    ADDONS: 426,
    THERMALEXPANSION: 427,
    TINKERSCONSTRUCT: 428,
    INDUSTRIALCRAFT: 429,
    THAUMCRAFT: 430,
    BUILDCRAFT: 432,
    FORESTRY: 433,
    ARMORTOOLWEAPON: 434,
    UTILITY: 435,
    FOOD: 436,
    BLOODMAGIC: 4485,
    LUCKYBLOCK: 4486,
    AE2: 4545,
    ENERGYREDSTONE: 4557,
    REDSTONE: 4558,
    TWITCH: 4671,
    CRAFTTWEAKER: 4773,
    FABRIC: 4780,
} as const;

const ModPacksCategoryTypes = {
    TECH: 4472,
    MAGIC: 4473,
    SCIFI: 4474,
    ADVENTURE: 4475,
    EXPLORATION: 4476,
    MINIGAME: 4477,
    QUESTS: 4478,
    HARDCORE: 4479,
    MAPBASED: 4480,
    SMALL: 4481,
    LARGE: 4482,
    COMBAT: 4483,
    MULTIPLAYER: 4484,
    FTB: 4487,
    SKYBLOCK: 4736,
} as const;

const CustomCategoryTypes = {
    CONFIG: 4547,
    LUCKYBLOCK: 4548,
    GUIDE: 4549,
    QUESTS: 4550,
    HARDCOREQUESTS: 4551,
    SCRIPTS: 4552,
    CRAFTTWEAKER: 4553,
    RECIPES: 4554,
    WORLDGEN: 4555,
    PROGRESSION: 4556,
    BUILDING: 4572,
} as const;

const AddonCategoryTypes = {
    WORLD: 4560,
    RESOURCE: 4561,
    SCENARIO: 4562,
} as const;

export const CategoryList = {
    ...BukkitCategoryTypes,
    ...WorldCategoryTypes,
    ...ResourceCategoryTypes,
    ...ModsCategoryTypes,
    ...ModPacksCategoryTypes,
    ...CustomCategoryTypes,
    ...AddonCategoryTypes,
} as const;

export const SortTypes = {
    POPULARITY: 1,
    LASTUPDATE: 2,
    NAME: 3,
    AUTHOR: 4,
    TOTAL_DOWNLOADS: 5,
} as const;

export const DependencyTypes = {
    EMBEDDEDLIBRARY: 1,
    OPTIONAL: 2,
    REQUIRED: 3,
    TOOL: 4,
    INCOMPATIBLE: 5,
    INCLUDE: 6,
} as const;

export const ReleaseType = {
    RELEASE: 1,
    BETA: 2,
    ALPHA: 3,
} as const;
