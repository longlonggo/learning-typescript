"use strict";
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greete(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var man = new Student("Jane", "M.", "User");
document.body.innerHTML = greete(man);
