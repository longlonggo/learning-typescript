//@flow

function greet(obj:{sayHello:()=>void}) {
    obj.sayHello();
}

let o={
    name:"张学友",
    sayHello(){console.log("My.name is "+o.name)}
    
}

greet(o);