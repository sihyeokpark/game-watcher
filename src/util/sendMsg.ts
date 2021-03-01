import { MessageEmbed } from "discord.js"

export default async function sendMsg(content: string | MessageEmbed, client: any, channel_id: string) {
    try {
        return await client?.channels?.cache?.get(channel_id)?.send(content)
    } catch(e) {
        console.log(e)
    }
}
