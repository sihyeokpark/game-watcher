# GameWatcherBot
If your friends are playing a game, you will know that through this discord bot. ~~It's called game stalking bot~~

## How to Use
1. `git clone` this repository
2. `yarn`
3. edit settings.example.json to settings.json and edit settings.json

### settings.json
``` json
"bot_token": "discord bot's token",
"channel_id": "discord channel id to send message",
"hypixel": {
    "enable": "game enable",
    "key": "hypixel api key",
    "player_uuid": ["minecraft user's uuids"]
},
"lol": {
    "enable": "game enable",
    "key": "lol api key",
    "player_name": ["lol usernames"]
}
```

## Games
### Hypixel
![hypixel](https://media.discordapp.net/attachments/700329896429224007/811953085198893086/unknown.png)<br>
* Hypixels can be turned on API setting and off by the user himself, so they may not work according to the user's API settings.

### LOL
![lol](https://cdn.discordapp.com/attachments/811199708110389278/812593713024204800/unknown.png)
