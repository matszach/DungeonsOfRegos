import os
import numpy as np
import pandas as pd

RAW_PATH = 'raw-assets/templates'
OUT_PATH = 'src/js/game/templates'

# loop
print('\n*** Parsing general templates ***')
for path in filter(lambda p: not p.startswith('_'), os.listdir(RAW_PATH)): 
    print(f'Working on "{path}".')
    if path.endswith('.csv'):
        df = pd.read_csv(f'{RAW_PATH}/{path}', sep=',')
        out = f'const {path[0:-4].upper()}_TEMPLATES = {{\n'
        cols = df.columns
        rows = df.values
        for j, rec in enumerate(rows): 
            out += f'\t{rec[0].upper()}: {{\n'
            out += f'\t\tid: {j},\n'
            for i, col in enumerate(cols[1:]):
                value = rec[i + 1]
                if value in [False, True, 'False', 'True']:
                    value = str(value).lower()
                elif str(value).isnumeric():
                    value = float(value)
                else:
                    value = f'\'{value}\''
                out += f'\t\t{col}: {value},\n'
            out += '\t},\n'
        out += '};'
        with open(f'{OUT_PATH}/{path[0:-4]}.template.js', 'w+') as file:
            file.write(out)
            file.close()
    elif path.endswith('.enum'):
        out = f'const {path[0:-5].upper()} = {{\n'
        with open(f'{RAW_PATH}/{path}') as file:
            for index, line in enumerate(file.read().split('\n')):
                out += f'\t{line}: {index},\n'
            out += '};'
        with open(f'{OUT_PATH}/{path[0:-5]}.enum.js', 'w+') as file:
            file.write(out)
            file.close()






