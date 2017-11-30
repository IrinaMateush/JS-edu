"use strict";

let users = [
    {name:"Dohn", age:20, surname: "Smith"},
    {name:"Petr", age:26, surname: "Prtrov"},
    {name:"Ivan", age:13, surname: "Son"}
];
//компоратор для сортировки объектов в массиве по полю
function byField (field) {
    return (a,b) => {
        return a[field] > b[field] ? 1 : -1;
    };
}

console.log(users.sort(byField("name")));
console.log(users.sort(byField("age")));

//аргумент field сохраняется в замыкании и каждый раз вызывая sort он используется