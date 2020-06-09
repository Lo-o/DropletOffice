Run 'denon start'

Also possible to use 'deno run --allow-env --allow-net server.ts'

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