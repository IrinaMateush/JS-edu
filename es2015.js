"use strict";

// 1. стрелочные функции было 
let isValid = function(name){
    return !!name;
}
// стрелка выглядит так (убрали return, = function, скобки )
let isValid = name => !!name;

// 2. упрощение методов объекта (занятие 2)
//старый стиль 
let store = {};
store.menu = {  //menu - сво-во объекта store 
    width = 40,
    height = 30,
    getArea: function(){
        return this.width * this.height;
    }
}
console.log(store.menu.getArea());
//упрощение в том, что удаляем : function, и так понятно, что функция
let store = {};
store.menu = {
    width = 40,
    height = 30,
    etArea() {
    return this.width * this.height;
}

// 3. обращение к свойствам (занятие 2) было:

if (store.menu.title === "menu" && store.menu.width === 400)

// вынесли в переменные, но все равно есть дублирование
let title = store.menu.title;
let width = store.menu.width;

if (title === "menu" && width === 400)

//но так все равно есть дублирование. Решение - деструктуризировать объект. 
//При этом в объект можно засунуть новые ключи со значениями по умолчанию. 
//если ключ, который вы добавляете в объекте есть, то используются значения из объекта
//ст-ру можно описывать и вложено. Есть статья в учебнике 

let {title, width, height, items = '<p></p>'} = store.menu;

if (title === "menu" && width === 400){
    ...
}

