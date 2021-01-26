export type StatusColor = 'green' | 'yellow' | 'red';

/**
 * A server list with status colors
 */
export interface MojangStatus {
    'minecraft.net': StatusColor
    'session.minecraft.net': StatusColor
    'account.mojang.com': StatusColor
    'authserver.mojang.com': StatusColor
    'api.mojang.com': StatusColor
    'textures.minecraft.net': StatusColor
    'mojang.com': StatusColor
}
