# GameWatcherBot
게임 시작하면 알림 오는 봇 ~~일명 게임 스토킹 봇~~
<img src="./img/gameWatcher.png" height="100"/>

## How to Use
1. git clone
2. install package
3. edit settings.example.json to settings.json 

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
![hypixel](https://media.discordapp.net/attachments/700329896429224007/811953085198893086/unknown.png)

### LOL
![lol](https://cdn.discordapp.com/attachments/811199708110389278/812593713024204800/unknown.png)
