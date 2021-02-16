import requests
import json

key = 'edc63735-7a78-4e6a-a509-54c7cab3badc'
player_uuid = 'eeab4c6642ba48a9a3995ee593422b02'
url = 'https://api.hypixel.net/status?key=' + key + '&uuid=' + player_uuid

html = requests.get(url)
result = json.loads(html.text)

if result['success']: 
    print('온라인')
else: print('오프라인')