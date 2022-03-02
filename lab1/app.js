//используем фреймворк Express
const express = require("express");
const path = require('path');
const app = express();

console.log(path.join(__dirname, 'index.html'));

app.get("/", (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

//Обработка GET-запроса
app.get("/submit", (req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end([
    'ФИО: ' + req.query.lastName + req.query.firstName + req.query.middleName, 
    'Возраст: ' + req.query.age, 
    'Телефон: ' + req.query.phone, 
    'Эл. Почта: ' +  req.query.email, 
    'О себе: ' + req.query.about,
    'Опыт работы: ' + req.query.experience, 
    'Образование: ' + req.query.education, 
    'Навыки: ' +
        + req.query.hasOwnProperty("htmlCSS") ? "HTML и CSS ": ""
        + req.query.hasOwnProperty("js") ? "Javascript ": ""
        + req.query.hasOwnProperty("ps") ? "Adobe Photoshop ": "",
    'Планируемый заработок: ' + req.query.salary, 
    'Планирует работать ' + req.query.hours + ' часов', 
    ].join('\n'));
});

app.listen(3000, () => console.log("Сервер запущен..."));