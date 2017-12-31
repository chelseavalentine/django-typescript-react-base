# Django + Typescript + React base

This base project includes my usual concoction for web apps:

* Django 2.0
* Typescript + TSLint
* React
* Postgres
* Virtualenv
* Yarn
* Node.js
* Webpack

Note that you'll have to take care of the following things manually:

* Having the aforementioned technologies installed
* Editing the package.json with further details (e.g. repository link, author, etc.)
* Populate `.env` with your database details

## Installation

* `git clone https://github.com/chelseavalentine/django-typescript-react-base`
* `cd django-typescript-react-base`
* `./setup.sh [your project name here]`

## Once you've set up your project...

Anyone can setup their local dev environment by:

1. Creating and activating the virtual environment:
    - `virtualenv venv -p python3`
    - `source venv/bin/activate`
2. `pip install -r requirements.txt`
3. `pip install -r requirements-local.txt`
4. `yarn`

To launch the project,

1. Run the development server
    - `node dev-server.js`
    - Visit [http://localhost:8000](http://localhost:8000).

To lint files: `npm run lint`

Before deployment, remember to do: `./manage.py collectstatic`
