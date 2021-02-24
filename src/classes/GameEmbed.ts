import { MessageEmbed } from 'discord.js'
import EmbedTemplate from 'src/util/EmbedTemplate'
import { threadId } from 'worker_threads'

export default class GameEmbed {
    embed!: MessageEmbed

    constructor(embedTemplate: EmbedTemplate) {
        const field_value: string[] = embedTemplate.value.split(' ')
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
                        value: this.bold(field_value[0]) + ' 에서 ' + this.bold(field_value[1]) + ' 하는 중'
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
        return this.embed
    }
}
