import requests
import json
import os
import sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
#import bot

key, player_uuid = '', ''
with open('../settings.json', 'r') as f:
    hipixel_settings = json.load(f)["hipixel"]
    key = hipixel_settings["key"]
    player_uuid = hipixel_settings["player_uuid"]
url = 'https://api.hypixel.net/status?key=' + key + '&uuid=' + player_uuid

html = requests.get(url)
result = json.loads(html.text)

#bot.client.get_channel(channel_id)
if result['session']['online']: print('온라인')
else: print('오프라인')