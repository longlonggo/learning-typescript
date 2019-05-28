"use strict";
function sayHi(person) {
    return "hello, " + person.firstName + " " + person.lastName;
}
var jane = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = sayHi(jane);
