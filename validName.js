 "use strict";
 
 function print (text) {
     alert(text);
 }
 
 const userName = prompt("Введите Ваше имя");
 
 function isValid (name) {
     return name !== '' && name !== null;
 } 
 
 function sayHello () {
     if (isValid(userName)){
         print("Welcome " + userName + "!")
     } else {
         print("Некорректное имя!");
     }
 }
 sayHello();