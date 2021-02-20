import path from 'path'
import fetch from 'node-fetch'
import { readJSONSync } from 'fs-extra'
import sendMsg from '../util/sendMsg'
import { client } from '..'
import { MessageEmbed, MessageReaction } from 'discord.js'

const PATH = path.resolve()

const { lol, channel_id } = readJSONSync(PATH + '/settings.json')

export default async function main() {
    const url = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + lol.player_name + '?api_key=' + lol.key
    const { id } = await (await fetch(url)).json()
    const spectator_url = 'https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/' + id + '?api_key=' + lol.key
    const body = await (await fetch(spectator_url)).json()

    console.log(body)

}

main()