project_name=$1

mv exampleprojectname $project_name

# Install python and node modules
virtualenv venv -p python3
source venv/bin/activate
pip install -r requirements.txt
pip install -r requirements-local.txt
yarn

# Get rid of the base repo's git directory, and reset it
rm -rf .git
git init

python setup.py $project_name
rm -f setup.py

echo 'All set up! Going to self-destruct now. Run `cd .. && cd $project_name` to update your command-line prompt.'
rm -f $project_name/setup.sh
