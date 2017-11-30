"use strict";

//вывести список друзей на страницу 

const friends = ["Tim","Olga","Max","Egor"];

function printFriends (sourceEl) {
    let ul = document.createElement('ul');

    friends.forEach(friendName => {
        let li = document.createElement('li');
        li.innerText = friendName;
        ul.append(li);
    });
    sourceEl.append(ul);
}

printFriends(document.querySelector(".js-friends"));

// вывести список друзей из массива объектов с именем и фамилией