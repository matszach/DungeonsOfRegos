import os
from PIL import Image, ImageDraw
import numpy as np
from math import ceil
from random import randint

# const
RAW_SPRITES_PATH = 'raw-assets/sprites'
RAW_IMAGES_PATH = 'raw-assets/img'
OUT_PATH = 'src/img'
RAW_SPRITE_SIZE = 16
RAW_BORDER_SIZE = 1
OUT_SCALE = 4

# loop
print('\n*** Parsing sprites ***')
for path in filter(lambda p: not p.startswith('_'), os.listdir(RAW_SPRITES_PATH)):

    print('Working on ' + path)

    # setup
    raw = Image.open(f'{RAW_SPRITES_PATH}/{path}')
    raw_w, raw_h = raw.size
    out_w = ceil(raw_w / (RAW_SPRITE_SIZE + RAW_BORDER_SIZE)) * (RAW_SPRITE_SIZE * OUT_SCALE)
    out_h = ceil(raw_h / (RAW_SPRITE_SIZE + RAW_BORDER_SIZE)) * (RAW_SPRITE_SIZE * OUT_SCALE)
    out = Image.new('RGBA', (out_w, out_h))
    out_draw = ImageDraw.Draw(out)

    # px data
    raw_px = raw.convert('RGBA')

    # parse
    ox = 0
    for x in range(raw_w):
        oy = 0
        if (x + RAW_BORDER_SIZE) % (RAW_SPRITE_SIZE + RAW_BORDER_SIZE) == 0:
            ox += 1
        else:
            for y in range(raw_h):
                if (y + RAW_BORDER_SIZE) % (RAW_SPRITE_SIZE + RAW_BORDER_SIZE) == 0:
                    oy += 1
                else: 
                    raw_color = raw.getpixel((x, y))
                    out_color = (0, 0, 0, 0) if raw_color[0:3] == (255, 255, 255) else raw_color
                    rect = [(x - ox) * OUT_SCALE, (y - oy) * OUT_SCALE, 
                        (x - ox + 1) * OUT_SCALE - 1, (y - oy + 1) * OUT_SCALE - 1]
                    out_draw.rectangle(rect, fill=tuple(out_color))

    # output
    out.save(f'{OUT_PATH}/{path}', "PNG")


print('\n*** Parsing images ***')
for path in filter(lambda p: not p.startswith('_'), os.listdir(RAW_IMAGES_PATH)):

    print('Working on ' + path)

    # setup
    raw = Image.open(f'{RAW_IMAGES_PATH}/{path}')
    raw_w, raw_h = raw.size
    out = Image.new('RGBA', (raw_w * OUT_SCALE, raw_h * OUT_SCALE))
    out_draw = ImageDraw.Draw(out)

    # px data
    raw_px = raw.convert('RGBA')

    # parse
    for x in range(raw_w):
        for y in range(raw_h):
            raw_color = raw.getpixel((x, y))
            rect = [x * OUT_SCALE, y * OUT_SCALE, (x + 1) * OUT_SCALE - 1, (y + 1) * OUT_SCALE - 1]
            out_draw.rectangle(rect, fill=tuple(raw_color))

    # output
    out.save(f'{OUT_PATH}/{path}', "PNG")






