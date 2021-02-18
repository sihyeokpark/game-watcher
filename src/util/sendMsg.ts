import { MessageEmbed } from "discord.js"

export default function sendMsg(content: string | MessageEmbed, client: any, channel_id: string): void {
    client.channels.cache.get(channel_id).send(content)
}
