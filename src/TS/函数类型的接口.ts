interface sumInterface{
    (a:number,b:number):number  
}

let sum:sumInterface= function sum(a:number,b:number){
    return a+b
}


//class接口

interface PersonInterface{
    name:string,
    age:number,
    eat():void
}


class LiLei implements PersonInterface{
    name:string='李磊';
    age:number=19;
    eat(){
        
    }
}