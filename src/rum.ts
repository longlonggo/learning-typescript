class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

interface Person {
    firstName: string,
    lastName: string
}

function greete(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let man = new Student("Jane", "M.", "User");

document.body.innerHTML = greete(man);