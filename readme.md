(vps) run **'deno run --allow-env --allow-net --allow-read server.ts'**  
(development using denon) **'denon start'**

Run 'denon start'

Also possible to use 'deno run --allow-env --allow-net --allow-read server.ts'

## Credentials json

First create a credentials.json to get a working link with the postgres database.
Use the credentialsBoilerplate.json file for setup.

## Postgres droplet setup

Tutorial also covers inserts etc:
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04

- sudo -i -u postgres
- psql
- CREATE USER deno WITH PASSWORD '' CREATEDB;
- CREATE DATABASE officetrivia OWNER deno; # NOTE capital letters not allowed
- \c officetrivia # Connect to db
- \dt --> show tables
- \d questions --> show all in table (q to exit)
  CREATE TABLE questions (
  id serial PRIMARY KEY,
  question text NOT NULL,
  correct_answer text NOT NULL,
  option1 text,
  option2 text,
  option3 text,
  option4 text
  );

\c officetrivia
ALTER ROLE deno WITH PASSWORD 'xxxxxxxxxxxx';
GRANT ALL PRIVILEGES ON TABLE questions TO deno;
GRANT USAGE, SELECT ON SEQUENCE questions_id_seq TO deno;

INSERT INTO questions (question, correct_answer, option1, option2, option3, option4) VALUES ('Who started the fire?', 'Ryan', 'Dwight', 'Pam', 'Kelly', 'Michael');

## Questions database API access

GET localhost:5566/api/v1/questions

GET localhost:5566/api/v1/questions/1

POST localhost:5566/api/v1/questions  
{  
 "question" : "What produce does Dwight farm?",  
 "correct_answer": "Beets",  
 "option1" : "Celery",  
 "option2" : "Potatoes",  
 "option3" : "Roots",  
 "option4" : ""  
}

## PYTHON psycopg2 database test

TODO: Change .py to be a path join of python script file location to the credentials loacation

For ease of access, a .py script is included that drops all questions in the database into a .xlsx file.  
Usage:  
(cd ~)
python3 ~/DropletOffice/Ops/manualSqlDump.py

## New questions form

Based on https://github.com/bradtraversy/vanillawebprojects

### docker/nginx

- https://www.youtube.com/watch?v=yQ_3huavJi8
- https://www.youtube.com/watch?v=HJ9bECmuwKo
- https://hub.docker.com/_/nginx

**Run nginx docker questions form on droplet (port 9000)**  
(cd newQuestionsForm)  
(sudo) docker build -t nginx_questionsform . --> always rebuild after changes to the website  
(sudo) docker run -d -p 9000:80 --restart unless-stopped newQuestionsForm --> map port 80 in container to 9000 on machine detached. start container on restart of droplet.

<br>

**Other docker commands**  
docker container help  
docker container ls  
docker container stop edf (first 3 fields)  
docker container ls -a (show all, also non-running, containers  
docker container run --publish 80:80 --detach --name webhost nginx (new nginx instance named webhost)  
docker container logs webhost  
docker container rm 18c edf --> delete containers 18c and edf
