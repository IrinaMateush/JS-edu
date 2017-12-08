"use strict";
// написать декоратор, который выдает время работы функции 

function foo () {
    console.log("foo");
}

function timeDecorator(func){
    let current = Date.now();
    return function(){
        func();
        console.log(Date.now() - current);
    };
}

let timeLogFoo = timeDecorator(foo);
timeLogFoo();
