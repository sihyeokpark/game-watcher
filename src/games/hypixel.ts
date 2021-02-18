import path from 'path'
import fetch from 'node-fetch'
import { readJSONSync } from 'fs-extra'
import sendMsg from '../util/sendMsg'
import { client } from '../bot'

const PATH = path.resolve()

const { hypixel, channel_id } = readJSONSync(PATH + '/settings.json')

async function main() {
    const url = 'https://api.hypixel.net/status?key=' + hypixel.key + '&uuid=' + hypixel.player_uuid
    const body = await (await fetch(url)).json()

    if (body.session.online) {
        sendMsg('ㅎㅇ', client, channel_id)
    }
    else sendMsg('ㅎㅇ', client, channel_id)
}

main()