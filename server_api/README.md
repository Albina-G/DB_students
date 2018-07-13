# «База даных студентов API»

URL: http://localhost:3000/api

Methods:

Получить список студентов:
GET /students

Answer code:
201 - Success
409 - Client Error
___________________________________________________________________

Создать(добавить) нового студента:
POST /
Body:
{"firstName": <string>, "lastName": <string>, "rating": <string>}

Answer: JSON
___________________________________________________________________

Удалить студента с id:
DELETE /:id

Answer code:
200 - Success
404 - Client Error
