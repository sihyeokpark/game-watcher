import os
import sys
import json
sys.path.append("..")
import bot

channel_id = ''
with open('../settings.json', 'r') as f:
    channel_id = json.load(f)["channel_id"]