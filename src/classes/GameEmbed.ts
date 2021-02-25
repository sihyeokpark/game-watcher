import { MessageEmbed } from 'discord.js'
import EmbedTemplate from 'src/util/EmbedTemplate'

export default class GameEmbed {
    embed: MessageEmbed

    constructor(embedTemplate: EmbedTemplate) {
        this.embed = new MessageEmbed({
            title: embedTemplate.title,
            author: {
                name: embedTemplate.name,
                icon_url: embedTemplate.icon_url
            },
            thumbnail: {
                url: embedTemplate.thumnail_url,
            },
            color: 0xffffff,
            fields: [
                {
                    name: embedTemplate.name + ' 실행 중',
                    value: this.bold(embedTemplate.value[0]) + ' 에서 ' + this.bold(embedTemplate.value[1]) + ' 하는 중'
                }
            ],
            timestamp: new Date(),
            footer: {
                text: embedTemplate.text + '분 동안 게임 중..'
            }
        })
    }

    private bold: Function = (str: string) => '**' + str + '**'

    public getEmbed() {
        this.embed.timestamp = new Date().getTime() + 24 * 60 * 60 * 1000
        return this.embed
    }
}
