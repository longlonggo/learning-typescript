//@flow

function sum(a: number, b: number): number {
    return a + b
}


// 将func变量 声明为函数类型 
// 意味着 我们可以指定为变量赋值的函数的类型
let func: (a: number, b: number) => number = sum;

function ajax(callBack: (data: Object) => void) {

}

ajax(function (a: Object) { })