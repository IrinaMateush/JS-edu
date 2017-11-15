"use strict";
//работа с объектами 

let userName;
const user = {
    "blabla": "some text", //специфичные ключи задаются строками 
    userName: "Tim",
    $userAge: 29,
    friends: null,

    peers: { //пример вложенности
        "Georgy": {
            name: "Georgy",
            age: 29
    }
    }
};

userName = user.userName; //пример записи
userName = "Pavel";
console.log(user.userName); //пример чтения
console.log(user);
console.log(user["blabla"]); //обращение к специфичному свойству

//если мы изначально не знаем по какому ключу вытянуть значение, например, если ключ вводится пользователем, то использ. аннотация через []
// если в userInput ввести например $userAge, то выведется 29
let userInput = prompt();
console.log(user[userInput]);

//проверка наличия свойства в объекте 
console.log("blabla" in user);

//удаление поля из объекта
delete user.blabla;
// добавление в объект 
user.peers.Georgy.name = "hello"; 
// добавление в объект динамически
user["new" + "key"] = "bla";

//копирование объекта (работает, если нет вложенных объектов)
const user2 = {};
for (let key in user){
    console.log(key, user[key]); //выводим объект в формате ключ: значение
    user2[key] = user[key];
}

console.log(user);
console.log(user2);

console.log(user == user2); //false, т.к. ссылки не равны

