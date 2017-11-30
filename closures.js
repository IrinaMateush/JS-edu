"use strict"; 
//пример на замыкания
function incDec () {
    let counter = 0; 
    return function (command){ // из функции incDec возвращается анонимная функция
        switch (command){
            case 'inc':
            counter++;
            break;
            case 'dec':
            counter--;
            break;
            case 'get':
            return counter;
        }            
    }
}

const controlCounter = incDec(); // функция controlCounter - разультат вызова incDec. только через эту функцию можно влиять на counter

controlCounter('inc'); //увеличиваем счетчик, 
controlCounter('inc');
controlCounter('inc');

console.log(controlCounter('get')); //выводим значение счетчика

// counter лежит в замыкании анонимной функции. Это обеспечивает безопасность