import os

RAW_PATH = 'raw-assets/rooms'
OUT_PATH = 'src/js/game/templates/room.template.js'

# loop
print('\n*** Parsing room templates ***')
out = 'const ROOM_TEMPLATES = [\n'
for path in filter(lambda p: not p.startswith('_'), os.listdir(RAW_PATH)):
    print(f'Working on {path} room template')
    with open(f'{RAW_PATH}/{path}') as file:
        walls = []
        nodes = []
        for y, line in enumerate(file):
            for x, char in enumerate(line):
                if char == 'W':
                    walls.append((x, y))
                elif char == 'm':
                    nodes.append((x, y, 'MONSTER_WEAK'))
                elif char == 'M':
                    nodes.append((x, y, 'MONSTER_STRONG'))
                elif char == 'c':
                    nodes.append((x, y, 'CONTAINER_WEAK'))
                elif char == 'C':
                    nodes.append((x, y, 'CONTAINER_STRONG'))
                elif char == 'i':
                    nodes.append((x, y, 'ITEM_WEAK'))
                elif char == 'I':
                    nodes.append((x, y, 'ITEM_STRONG'))
                elif char == 'B':
                    nodes.append((x, y, 'BOSS'))
        out += '\t{\n'
        out += '\t\twalls: [\n'
        for w in walls:
            out += f'\t\t\t{{x: {w[0]}, y: {w[1]}}},\n'
        out += '\t\t],\n'
        out += '\t\tnodes: [\n'
        for n in nodes:
            out += f'\t\t\t{{x: {n[0]}, y: {n[1]}, key: \'{n[2]}\'}},\n'
        out += '\t\t]\n'
        out += '\t},\n'
out += '];'

with open(OUT_PATH, 'w+') as output_file:
    output_file.write(out)




