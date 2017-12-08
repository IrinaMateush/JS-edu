"use strict";
// написать декоратор, который выдает время работы функции 

function foo (max = 10) {
    return 2 ** max;
}

let some = foo(100);
console.log(some);

function timeDecorator(func){
    return function(...args){
        let current = performance.now();
        let result = func.apply(this, args);

        console.log('Time:', performance.now() - current);
        return result;
    };
}

let timeLogFoo = timeDecorator(foo);
some = timeLogFoo(10);
timeLogFoo();
