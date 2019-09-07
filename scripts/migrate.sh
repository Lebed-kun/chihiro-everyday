cd server
source env/scripts/activate
python src/manage.py makemigrations
python src/manage.py migrate