import path from 'path'
import { Client } from 'discord.js'
import { readJSONSync } from 'fs-extra'

import hypixel from './games/hypixel'
import lol from './games/lol'

const PATH = path.resolve()
const { bot_token : token } = readJSONSync(PATH + '/settings.json')
export const client = new Client()

client.on('ready', () => {
    console.log('[*] Ready')
    
    setInterval(() => {
        hypixel()
        lol()
    }, 60000)
    
})

client.login(token)