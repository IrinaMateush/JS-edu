"use strict";
//работа с объектами 

//this использ для доступа к собственным данным объекта в котором определена вызванная функция
//иначе говоря спец переменная которая обозначает сам объект
//в this идет то значение, которое слева от точки во время вызова функции 

const user = {
    userName: "Tim",
    userAge: 29,
    sayHello: function (name){
        console.log ("Hi, "+ name + " my name is " + this.userName) 
    },

    data: {
        message: "My secret data",
        showMessage: function(){
            console.log(this.message); // в данном случае вместо this, м.б. data. Что слева от точки, то и в this
        }
    }
};

user.sayHello("Nick");

let data = user.data; //можно записывать в ссылку
data.showMessage("hello!") // слева от точки в вызове ф-ции data => data пойдет в this

//нельзя завести объект и перебрать ео свойства с помощью for of или for each. Как делать?

const user = {
    userName: "Tim",
    userAge: 29,
    isAdmin: true,
    complicated: {
        foo: "bar"
    }
};

for(let field of Object.keys(user)){
    console.log(field); //выведет массив ключей объекта
}
for(let field of Object.values(user)){
    console.log(field); //выведет массив значений объекта
}
for(let field of Object.entries(user)){
    console.log(field); //выведет массив массивов ключ - значение объекта ["name", "Tim"] ... 
}
// деструктуризация массива. Вместо field объявляем структуру, тогда ответ будет не массивом (без квадратных скобок)
for(let [key, value] of Object.entries(user)){
    console.log(key, value); //выведет ключ - значение объекта "name", "Tim" ... 
}
