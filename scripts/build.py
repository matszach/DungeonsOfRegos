import os

os.system('python scripts/preprocess-img.py')
os.system('python scripts/preprocess-templates.py')
os.system('python scripts/build-room-templates.py')
os.system('python scripts/generate_fog_of_war.py')
os.system('python scripts/build-index.py')
