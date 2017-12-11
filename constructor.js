"use strict";

//было так: 
// функция createUser, которая возвращает новый объект
function createUser (name) {
    return{
        name: name,
        sayHello () {
            console.log(this.name);
        }
    };
}

let jhon = createUser('John');
let bob = createUser('Bob');

bob.sayHello;
jhon.sayHello;

// Но js может изящнее. С использованием конструкторов стало так:
function User(name, age) { //можно передавать юзеру дополнительные поля
        this.name = name, //в созданный заранее объект проще что-то записать
        this.age = age; //просто работаем с this как с объектом

        this.sayHello = function () { // можно добавить логики методу объекта 
            if (this.age > 18 ) {
                console.log('Good day ${this.name}')
            } else {
                console.log('Hello, ${this.name}')
            }
    };
}

// когда ф-ция вызывается с new она всегда возвращает объект, который создан в памяти заранее
// в качестве this объект, который будет в результате
let jhon = new User('John', 45); 
let bob = new User('Bob', 7);

let users = ['Nik','Anna','Mike'].map(name => new User(name)); // можно наконструировать объектов прямо в цикле
users[1].sayHello()

bob.sayHello(); //просто вызываем
jhon.sayHello();