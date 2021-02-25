import path from 'path'
import fetch from 'node-fetch'
import { readJSONSync } from 'fs-extra'
import sendMsg from '../util/sendMsg'
import { client } from '..'
import GameEmbed from '../classes/GameEmbed'
import { Message } from 'discord.js'
import EmbedTemplate from 'src/util/EmbedTemplate'

const PATH = path.resolve()

const { hypixel, channel_id } = readJSONSync(PATH + '/settings.json')

let time: number[] = []
for (let i = 0; i < hypixel.player_uuid.length; i++) time[i] = 0

let msg: Message[] = []

export default async function main() {
    for (let i = 0; i < hypixel.player_uuid.length; i++) {
        const url = 'https://api.hypixel.net/status?key=' + hypixel.key + '&uuid=' + hypixel.player_uuid[i]
        const body = await (await fetch(url)).json()
        const profile_url = 'https://sessionserver.mojang.com/session/minecraft/profile/' + hypixel.player_uuid[i]

        if (body.session.online) {
            const { name } = await (await fetch(profile_url)).json()
            const skin_url = 'https://minotar.net/helm/' + name + '/100'

            time[i]++

            const embed: GameEmbed = new GameEmbed({
                title: name,
                name: 'Hypixel',
                icon_url: 'https://avatars.githubusercontent.com/u/3840546?s=280&v=4',
                thumnail_url: skin_url,
                color: 0xffffff,
                value: [body.session.gameType, body.session.mode],
                text: time[i]
            })

            if (time[i] === 1) {
                msg[i] = await sendMsg(embed.getEmbed(), client, channel_id)
            } else {
                msg[i].edit(embed.getEmbed())
            }
        }
        else time[i] = 0
    }
}
