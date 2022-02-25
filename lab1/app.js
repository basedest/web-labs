//используем фреймворк Express
const express = require("express");
const app = express();

//Используем для отображения ответа с сервера шаблоны EJS
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

//Обработка GET-запроса
app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
    //обработка параметров GET-запроса
    let tmp = request.query;
    console.log(tmp); 
    //форматирование вывода
    let data = `
    ФИО: ${tmp.lastName} ${tmp.firstName} ${tmp.middleName} 
    Возраст: ${tmp.age} 
    Телефон: ${tmp.phone} 
    Эл. Почта: ${tmp.email} 
    О себе: ${tmp.about} 
    Опыт работы: ${tmp.experience} 
    Образование: ${tmp.education} 
    Навыки: 
        ${tmp.hasOwnProperty("htmlCSS") ? "HTML и CSS": ""}
        ${tmp.hasOwnProperty("js") ? "Javascript": ""}
        ${tmp.hasOwnProperty("ps") ? "Adobe Photoshop": ""}
    Планируемый заработок: ${tmp.salary}
    Планирует работать ${tmp.hours} часов 
    `;

    //Передаём в рендер-движок полученную строку в качестве параметра,
    //для того, чтобы он вставил её в ejs-шаблон 
    //затем этот шаблон отображается на стороне клиента
    response.render('index', {res: data});
});

app.listen(3000, ()=>console.log("Сервер запущен..."));