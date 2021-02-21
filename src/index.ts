import path from 'path'
import { Client } from 'discord.js'
import { readJSONSync } from 'fs-extra'

import hypixel from './games/hypixel'
import lol from './games/lol'

const PATH = path.resolve()
const { bot_token : token, hypixel_json, lol_json } = readJSONSync(PATH + '/settings.json')
export const client = new Client()

client.on('ready', () => {
    console.log('[*] Ready')
    
    setInterval(() => {
        if (hypixel_json.enable) hypixel()
        if (lol_json.enable) lol()
    }, 60000)
    
})

client.login(token)