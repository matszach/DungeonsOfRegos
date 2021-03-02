import os
from PIL import Image, ImageDraw
import numpy as np
from math import ceil, sqrt
from random import randint

X_SIZE = 3200
Y_SIZE = 1800
R_SIZE = 150

print('\n*** Generating fog of war ***')
out = Image.new('RGBA', (X_SIZE, Y_SIZE))
# out_draw = ImageDraw.Draw(out)

for x in range(X_SIZE):
    tx = x - X_SIZE / 2
    if(x % 300 == 0):
        print(f'{int(100 * x/X_SIZE)}% done')
    for y in range(Y_SIZE):
        ty = y - Y_SIZE / 2
        r = sqrt(tx**2 + ty**2)
        alpha = int(255 if r > R_SIZE else r * 255/R_SIZE) 
        out.putpixel((x, y), (10, 10, 10, alpha))

print('100% done')
out.save('src/img/fog_of_war.png', 'PNG')

