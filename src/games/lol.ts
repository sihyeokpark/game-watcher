import path from 'path'
import fetch from 'node-fetch'
import { readJSONSync } from 'fs-extra'
import sendMsg from '../util/sendMsg'
import { client } from '..'
import GameEmbed from '../classes/GameEmbed'
import { Message } from 'discord.js'

const PATH = path.resolve()

const { lol, channel_id } = readJSONSync(PATH + '/settings.json')

let time: number[] = []
for (let i = 0; i < lol.player_name.length; i++) time[i] = 0

let msg: Message[] = []

export default async function main() {
    for (let i = 0; i < lol.player_name.length; i++) {
        const url = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + encodeURIComponent(lol.player_name) + '?api_key=' + lol.key
        const { id, status } = await (await fetch(url)).json()
        const spectator_url = 'https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/' + id + '?api_key=' + lol.key
        const body = await (await fetch(spectator_url)).json()

        if (status.status_code === 403) throw Error('Invalid LOL API key')

        const embed: GameEmbed = new GameEmbed({
            title: lol.player_name,
            name: 'League of Legends',
            icon_url: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/ko-kr/production/ko-kr/static/placeholder-1c66220c6149b49352c4cf496f70ad86.jpg',
            color: 0xffffff,
            value: [body.gameType, body.gameMode],
            text: time[i]
        })

        if (body.gameType) {
            time[i]++
            if (time[i] === 1)msg[i] = await sendMsg(embed.getEmbed(), client, channel_id)
            else  msg[i].edit(embed.getEmbed())
        } else time[i] = 0
    }
}
