import discord
import json

token = ''
with open('settings.json', 'r') as f:
    token = json.load(f)["bot_token"]

client = discord.Client()

@client.event
async def on_ready():
    print(f'[*] {client.user} has connected to Discord!')

client.run(token)