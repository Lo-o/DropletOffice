Run 'denon start'

Also possible to use 'deno run --allow-env --allow-net server.ts'


## credentials json
Fill in the credentials json first to get a working link with the postgres database 



## Postgres droplet setup
Tutorial also covers inserts etc:
https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04


- sudo -i -u postgres
- psql
- CREATE USER deno WITH PASSWORD '' CREATEDB;
- CREATE DATABASE officetrivia OWNER deno;     # NOTE capital letters not allowed
- \c officetrivia      # Connect to db
- \dt --> show tables
- \d questions --> show all in table (q to exit)
CREATE TABLE questions (
    id              serial PRIMARY KEY,
    question        text NOT NULL,
    correct_answer  text NOT NULL,
    option1         text,
    option2         text,
    option3         text, 
    option4         text
); 

\c officetrivia
ALTER ROLE deno WITH PASSWORD 'xxxxxxxxxxxx';
GRANT ALL PRIVILEGES ON TABLE questions TO deno;
GRANT USAGE, SELECT ON SEQUENCE questions_id_seq TO deno;

INSERT INTO questions (question, correct_answer, option1, option2, option3, option4) VALUES ('Who started the fire?', 'Ryan', 'Dwight', 'Pam', 'Kelly', 'Michael');


## API
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
https://stackoverflow.com/questions/28253681/you-need-to-install-postgresql-server-dev-x-y-for-building-a-server-side-extensi

import psycopg2

connection = psycopg2.connect(user = "deno", password = 'PASSWORD', host = "127.0.0.1", port = "5432", database = "officetrivia")  
cursor = connection.cursor()  
cursor.execute('SELECT * FROM questions;')  

cursor.fetchall()

cursor.execute("INSERT INTO questions (question, correct_answer, option1, option2, option3, option4) VALUES ('Who started the fire?', 'Ryan', 'Dwight', 'Pam', 'Kelly', 'Michael');")

cursor.close()
connection.close()
