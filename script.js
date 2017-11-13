"use strict";
//проверка логина
let login = prompt ("Кто пришел?", "");
if (login == "Админ") {
    let password = prompt ("Пароль?", "");
    if (password == "Властелин") {
        alert("Добро пожаловать!");
    } else if (password == null ) {
        alert("Вход отменен");
    } else {
        alert("Пароль неверен");
    }
}else if (login == null ) {
    alert("Вход отменен");
} else {
    alert("Я Вас не знаю");
}