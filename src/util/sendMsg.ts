export default function sendMsg(content: string, client: any, channel_id: string): void {
    client.channels.cache.get(channel_id).send(content)
}
