import subprocess
import sys
from django.utils.crypto import get_random_string

repo_name = 'django-typescript-react-base'
project_name = sys.argv[1]

# Populate project name placeholders with the chosen project
files = [
    '{}/settings.py'.format(project_name),
    '{}/urls.py'.format(project_name),
    '{}/wsgi.py'.format(project_name),
    'manage.py',
    'package.json',
    'templates/index.html',
]

for file in files:
    with open(file, 'wt') as fout:
        for line in fin:
            fout.write(line.replace('exampleprojectname', project_name))

chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'
secret_key = get_random_string(50, chars)

commands = [
    # Create .env file with a secret key
    'echo "PG_DB_NAME=[DBNAME]\nPG_DB_USER=[DBUSER]\nPG_DB_PASSWORD=[DBUSERPASS]\nSECRET_KEY=\"{}\"" > {}/.env'.format(secret_key, project_name),
]

for command in command:
    process = subprocess.Popen(command.split(), stdout=subprocess.PIPE)
    output, error = process.communicate()
