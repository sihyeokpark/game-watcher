import fetch from 'node-fetch'
const { hipixel } = require('../settings.json')

async function main() {
    const url = 'https://api.hypixel.net/status?key=' + hipixel.key + '&uuid=' + hipixel.player_uuid
    const body = await (await fetch(url)).json()

    if (body.session.online) console.log('온라인')
    else console.log('오프라인')
}

main()