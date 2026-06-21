"use strict";
const myUser = { name: "Alice", id: 1 };
function greet(person) {
    return `Hellow, ${person.name}! Your ID is ${person.id}`;
}
console.log(greet(myUser));
