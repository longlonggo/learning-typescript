class Animal{
    age:number;
    constructor(age:number){
        this.age=age;
    }

    eat():void{
        console.log('吃个大鸡巴');
        
    }
}


class Dog extends Animal{
    type:string;

    constructor(type:string,age:number){
        //继承中如果有构造器 就要调用super（）
        super(age);
        this.type=type;
    }
    //子类中如果有和父类同名的方法，则会进行覆盖重写
    //调用利用就近原则
    eat(){
        console.log("狗对象中的eat方法");
        
    }
}

var dog=new Dog("几把毛",18);
dog.eat();