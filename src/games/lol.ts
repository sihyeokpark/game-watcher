import path from 'path'
import fetch from 'node-fetch'
import { readJSONSync } from 'fs-extra'
import sendMsg from '../util/sendMsg'
import { client } from '..'
import { MessageEmbed } from 'discord.js'

const PATH = path.resolve()

const { lol, channel_id } = readJSONSync(PATH + '/settings.json')

const bold = (str: string) => { return '**' + str + '**' }

let time = 0

export default async function main() {
    const url = 'https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/' + encodeURIComponent(lol.player_name) + '?api_key=' + lol.key
    const { id } = await (await fetch(url)).json()
    const spectator_url = 'https://kr.api.riotgames.com/lol/spectator/v4/active-games/by-summoner/' + id + '?api_key=' + lol.key
    const body = await (await fetch(spectator_url)).json()

    if (body) {
        time++
        sendMsg(new MessageEmbed({
            title: lol.player_name,
            author: {
                name: 'League of Legends',
                icon_url: 'https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/ko-kr/production/ko-kr/static/placeholder-1c66220c6149b49352c4cf496f70ad86.jpg'
            },
            color: 0xffffff,
            fields: [
                {
                    name: 'League of Legends 실행 중',
                    value: bold(body.gameType) + ' 에서 ' + bold(body.gameMode) + ' 하는 중'
                }
            ],
            timestamp: new Date(),
            footer: {
                text: time + '분 동안 게임 중..'
            }
        }), client, channel_id)
    } else time = 0
}

main()
