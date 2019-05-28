interface Person{
    firstName:string;
    lastName:string
}

function sayHi(person:Person){
    return "hello, "+person.firstName+" "+person.lastName;
}

let jane={firstName:"Jane",lastName:"User"};

document.body.innerHTML=sayHi(jane)
