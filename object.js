"use strict";
//работа с объектами 

//this использ для доступа к собственным данным объекта в котором определена вызванная функция
//иначе говоря спец переменная которая обозначает сам объект
//в this идет то значение, которое слева от точки

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
data.showMessage("hello!")


