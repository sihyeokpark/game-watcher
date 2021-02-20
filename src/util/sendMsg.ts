import { Client, MessageEmbed } from "discord.js"

export default function sendMsg(content: string | MessageEmbed, client: any, channel_id: string): void {
    try {
        client?.channels?.cache?.get(channel_id).send(content)
    } catch(e) {
        console.log(e)
    }
}
