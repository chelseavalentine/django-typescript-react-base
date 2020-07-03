# Django + Typescript + React base

This base project includes my usual concoction for web apps:

* Python 3
* Django 2.0
* Typescript + TSLint
* React
* Postgres
* Virtualenv
* Yarn
* Node.js
* Webpack 4

Note that you'll have to have the aforementioned technologies (except for React) installed already.

## Installation

* `git clone https://github.com/chelseavalentine/django-typescript-react-base`
* `cd django-typescript-react-base`
* `./setup.sh [your project name here]`
* `cd .. && cd [your project name here]`

Install Postgres if needed:
```
brew install postgres
echo 'alias pg-start="brew services start postgresql"' >> ~/.bash_profile
echo 'alias pg-stop="brew services stop postgresql"' >> ~/.bash_profile
```

* Start the Postgres server: `pg-start`
* Create the Postgres database and user:
    - `createdb [dbname]`
    - `createuser --inherit root --login --pwprompt`

Check the users that your database has:
```
psql postgres

postgres=# \du
```

* Populate `[your project name]/.env` with your database details
* Edit the package.json with further details if you wish (e.g. repository link, author, etc.)

## Once you've set up your project...

Anyone can setup their local dev environment by:

1. Creating and activating the virtual environment using Python 3:
    - `virtualenv venv -p python3`
    - `source venv/bin/activate`
2. `pip3 install -r requirements.txt`
3. `pip3 install -r requirements-local.txt`

To launch the project,

1. Run the hot reloading development server
    - `node dev-server.js`
2. `./manage.py runserver`
3. Visit [http://localhost:8000](http://localhost:8000).

To lint files: `npm run lint`

Before deployment, remember to do: `./manage.py collectstatic`

