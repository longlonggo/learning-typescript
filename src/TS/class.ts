class Person{
    //与ES6不同的是，TS中属性必须声明，需要指定类型
    name:string;
    //声明好属性之后，属性必须复制一个默认值或者在构造函数中进行初始化
    age:number=10;
    constructor(name:string){
        this.name=name;
    }
}