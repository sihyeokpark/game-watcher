import path from 'path'
import { Client } from 'discord.js'
import { readJSONSync } from 'fs-extra'

const PATH = path.resolve()
const { bot_token : token } = readJSONSync(PATH + '/settings.json')
export const client = new Client()

client.on('ready', () => console.log('[*] Ready'))

client.login(token)