# TypeScript

## 是什么?

TypeScript是微软开发的一款开源的JavaScript超集语言!

JavaScript超集:当前任何JavaScript都是合法的TypeScript代码!

TypeScript主要为JavaScript提供类型系统和ES6语法支持!

Flow只是类型检查工具,TypeScript是一种开发语言!

TypeScript有自己的编译工具,我们写好的TypeScript代码最终会通过编译器编译成为JavaScript代码运行!

## 如何使用

### 安装

TypeScript命令行工具的安装(TS编译器)

```shell
npm i typescript -D
```

```shell
    npx tsc//编译
    npx tsc --inint //生成初始化文件
    npx tsc -p ./tsconfig.json //使用配置文件编译ts
```

## 区别于Flow

### 数组

```typeScript


let a:Array<number>=[1,2,3];


let b:number[] =[1,2,3];

//以上两种都可以
```

### 元组(Tuple)

```typeScript


let tup:[number,string]=[1,'a'];

tup[0] //只能赋值 number
tup[1] //只能赋值 string

tup[2] //这个下标越界,会根据 tup 指定的number|string 来约束

//以上两种都可以
```