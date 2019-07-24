//接口

//接口可以理解成一个约定 一个规范

//接口使用interface进行声明

//给属性加上？ 以后就会变成可选属性

//给属性加上readonly  之后就不能再次覆盖了

interface AjaxOptions{
    url                  :  string;
    type                 :  string;
    data?                :  object;
    sucess(data:object)  :  void;

}


function ajax(options:AjaxOptions) {
    
}

ajax({
    url:"111",
    type:"get",
    // data:{},
    sucess(data){

    }
})

//额外属性检查   [xx:string]:any   xx任取
interface Point{
    readonly x:number,
    y?:number,
    [xx:string]:any
}

let poi:Point={
x:10,
//y:20   ?以后可有可无
}

//poi.x=100;//只读报错

let poi2:Point={
    x:100,
    a:10
}