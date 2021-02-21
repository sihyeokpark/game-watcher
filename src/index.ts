import path from 'path'
import { Client } from 'discord.js'
import { readJSONSync } from 'fs-extra'

import hypixel from './games/hypixel'
import lol from './games/lol'

const PATH = path.resolve()
const { bot_token : token, hypixel, lol } = readJSONSync(PATH + '/settings.json')
export const client = new Client()

client.on('ready', () => {
    console.log('[*] Ready')
    
    setInterval(() => {
        if (hypixel.enable) hypixel()
        if (lol.enable) lol()
    }, 60000)
    
})

client.login(token)