import os

INDEX = {'value': ''}

def one(file_name, dirpath = ''):
    print(f'Importing "{file_name}".')
    INDEX['value'] += f'\t\t<script src=\'js/{dirpath}{file_name}\'></script>\n'

def many(file_names):
    for f in file_names:
        one(f)

def dir(dir_path):
    for file_name in os.listdir('src/js/' + dir_path):
        if file_name.endswith('.js'):
            one(file_name, dir_path)

def dirs(dir_paths):
    for path in dir_paths:
        dir(path)

print('\n*** Building the index.html file ***')
INDEX['value'] += '<html>\n\t<head>\n\t\t<link rel="stylesheet" href="css/styles.css">\n'
dirs(['game/templates/', 'game/const/'])
dirs(['lib/', 'util/', 'tools/'])
many(['scenes/SceneTimer.js', 'scenes/BaseSceneComponent.js', 'scenes/BaseScene.js', 'scenes/MenuScene.js'])
dirs(['scenes/final-components/', 'scenes/final-scenes/'])
many(['game/Entity.js', 'game/actors/ActorAttributes.js', 'game/actors/Inventory.js', 
    'game/actors/Actor.js', 'game/actors/Player.js', 'game/actors/MonsterAI.js', 'game/actors/Monster.js'])
many(['game/fields/Field.js'])
dirs(['game/fields/final-fields/'])
many(['game/items/Item.js', 'game/items/Equippable.js', 'game/items/Weapon.js', 
    'game/items/Valuable.js', 'game/items/Money.js', 'game/items/Consumable.js', 
    'game/items/Key.js', 'game/items/ItemEntity.js'])
many(['game/interactables/Interactable.js', 'game/interactables/LevelExit.js', 
    'game/interactables/Altar.js', 'game/interactables/Transmuter.js'])
dirs(['game/factories/modules/'])
many(['game/factories/LevelFactory.js', 'game/factories/PlayerFactory.js'])
one('game/level/Level.js')
INDEX['value'] += '\t</head>\n\t<body>\n'
one('main.js')
INDEX['value'] += '\t</body>\n</html>'

with open('src/index.html', 'w+') as file:
    file.write(INDEX['value'])
    file.close()


