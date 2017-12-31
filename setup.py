import subprocess
import sys
from django.utils.crypto import get_random_string

project_name = sys.argv[1]

# Populate project name placeholders with the chosen project
files = 'exampleprojectname/settings.py', 'exampleprojectname/urls.py', 'exampleprojectname/wsgi.py', 'manage.py', 'package.json', 'templates/index.html'

for file in files:
    with open(file, 'wt') as fout:
        for line in fin:
            fout.write(line.replace('exampleprojectname', project_name))

chars = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)'
secret_key = get_random_string(50, chars)

commands = [
    # Rename directories
    'mv exampleprojectname {}'.format(project_name),
    'mv ../exampleprojectname ../{}'.format(project_name),

    # Create .env file with a secret key
    'echo "PG_DB_NAME=[DBNAME]\nPG_DB_USER=[DBUSER]\nPG_DB_PASSWORD=[DBUSERPASS]\nSECRET_KEY=\"{}\""'.format(secret_key),

    # Setup dev environment
    'virtualenv venv -p python3',
    'source venv/bin/activate',
    'pip install -r requirements.txt',
    'pip install -r requirements-local.txt',
    'yarn',
    'rm -rf .git',
    'git init',
]

for command in command:
    process = subprocess.Popen(command.split(), stdout=subprocess.PIPE)
    output, error = process.communicate()
