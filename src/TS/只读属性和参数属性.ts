class Cat{
    readonly name:string

    
    // type:string;
    // 构造函数的参数加上修饰符，就相当于声明了一个属性
    constructor(public type:string){
        this.name="飞天小女警"

        this.type=type
    }
}

let cat =new Cat('橘猫')
//cat.name='123'//报错

cat.type;