import path from 'path'
import fetch from 'node-fetch'
import { readJSONSync } from 'fs-extra'

const PATH = path.resolve()

const { hypixel } = readJSONSync(PATH + '/settings.json')

async function main() {
    const url = 'https://api.hypixel.net/status?key=' + hypixel.key + '&uuid=' + hypixel.player_uuid
    const body = await (await fetch(url)).json()

    if (body.session.online) console.log('온라인')
    else console.log('오프라인')
}

main()