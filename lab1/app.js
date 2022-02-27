//используем фреймворк Express
const express = require("express");
const app = express();
//Используем для отображения ответа с сервера шаблоны EJS
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.get("/", (req, res) => res.render('index'));

//Обработка GET-запроса
app.get("/submit", (req, res) => {
    let tmp = req.query;
    console.log(tmp); 
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
    res.render('submit', {res: data});
}); 

app.listen(3000, () => console.log("Сервер запущен..."));