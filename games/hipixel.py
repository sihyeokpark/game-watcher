import requests
from bs4 import BeautifulSoup

player_name = 'hue2020'
url = 'https://plancke.io/hypixel/player/stats/' + player_name

html = requests.get(url)
soup = BeautifulSoup(html.text, 'html.parser')

result = soup.select('#wrapper > div.content-page > div > div > div:nth-child(2) > div.col-lg-3.b-0.p-0 > div:nth-child(2) > div')
string = ''
for res in result: string = res.text.replace('\n', '').replace('\u200b', '')

arr = dict()
if string == 'StatusOffline': print('오프라인')
else:
    string = string.replace('StatusGameType: ', '').replace('Mode: ', '').split(' ')
    arr["gameType"], arr["mode"] = string[0], string[1]

print(arr)