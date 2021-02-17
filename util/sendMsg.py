import os
import sys
import json
from ..bot import client

channel_id = ''
with open('../settings.json', 'r') as f:
    channel_id = json.load(f)["channel_id"]

if __name__ == "__main__":
    print('start')