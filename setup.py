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
    lines = []

    with open(file) as fin:
        for line in fin:
            line = line.replace('exampleprojectname', project_name)
            lines.append(line)

    with open(file, 'w') as fout:
        for line in lines:
            fout.write(line)


chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'
secret_key = get_random_string(50, chars)

commands = [
    # Rename project folder
    'mv ../{} ../{}'.format(repo_name, project_name),

    # Initialize .env file
    'touch {}/.env'.format(project_name),
]

for command in commands:
    process = subprocess.Popen(command.split(), stdout=subprocess.PIPE)
    output, error = process.communicate()

# Create .env file with a secret key
with open('{}/.env'.format(project_name), 'w') as fout:
    lines = [
        'PG_DB_NAME="[DBNAME]"\n',
        'PG_DB_USER="[DBUSER]"\n',
        'PG_DB_PASSWORD="[DBUSERPASS]"\n',
        'SECRET_KEY=\"{}\"\n'.format(secret_key),
    ]

    for line in lines:
        fout.write(line)
