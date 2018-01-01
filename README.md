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
* Webpack

Note that you'll have to have the aforementioned technologies (except for React, of course) installed.

## Installation

* `git clone https://github.com/chelseavalentine/django-typescript-react-base`
* `cd django-typescript-react-base`
* `./setup.sh [your project name here]`
* `cd .. && cd [your project name here]`
* Populate `[your project name]/.env` with your database details
* Edit the package.json with further details if you wish (e.g. repository link, author, etc.)

## Once you've set up your project...

Anyone can setup their local dev environment by:

1. Creating and activating the virtual environment using Python 3:
    - `virtualenv venv -p python3`
    - `source venv/bin/activate`
2. `pip install -r requirements.txt`
3. `pip install -r requirements-local.txt`

To launch the project,

1. Run the hot reloading development server
    - `node dev-server.js`
    - Visit [http://localhost:8000](http://localhost:8000).
2. `./manage.py runserver`

To lint files: `npm run lint`

Before deployment, remember to do: `./manage.py collectstatic`

### Refreshers

* On setting up a new Postgres database locally:
  - `createdb [dbname]`
  - `createuser [dbuser] --inherit root --login --pwprompt`
