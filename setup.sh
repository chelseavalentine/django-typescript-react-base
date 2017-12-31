project_name=$1

mv exampleprojectname $project_name
virtualenv venv -p python3
source venv/bin/activate
pip install -r requirements.txt
pip install -r requirements-local.txt
yarn
rm -rf .git
git init
python setup.py $project_name
cd ..
cd $project_name
pwd
rm -f setup.py
echo 'All set up! Going to self-destruct now.'
rm -- "$0"
