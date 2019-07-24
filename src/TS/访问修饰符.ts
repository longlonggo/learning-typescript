//访问修饰符：
//指的就是在类的成员前通过添加关键字来设置当前成员的访问权限
//public    :公开的，默认 所有人都能访问
//private   :私有的，只能在当前类中访问
//protected :受保护的，这只能在当前类或者子类中访问

enum Color{
    red,
    yellow,
    blue
}

class Car{
    color:Color;
    constructor(){
        this.color=Color.red;
        this.run()
    }

    private run(){

    }

    protected loadPeople(){

    }
}

let byd=new Car();
byd.color;
//byd.run();//报错
//byd.loadPeople();//报错

class Audi extends Car{
    sayHi(){
        console.log(this.color);
        //this.run();//报错
        this.loadPeople();//正常运行
    }
}




