# Flow的基本使用步骤

## 安装

```shell
npm init -y
npm i flow-bin -D
```

## 书写代码，为代码添加类型

```js
var 变量：数据类型=数据;
```

1.通过注释的方式添加（不会改写js代码，代码在添加完类型以后仍然可以正常运行）
2.通过直接给数据添加类型，会改写代码，如果需要正常运行，需要babel转码

## 使用flow进行类型检查

1.现在package.json文件中，scripts属性中添加flow命令
2.需要为flow创建一个配置文件.flowconfig

```shell
npm run flow init
```

3.执行类型检查

```shell
npm run flow
```

## 使用babel对flow代码进行转码

如果给数据添加类型声明是通过改变代码结构的方式，直接修改js代码，那么代码是不能正常运行的

我们需要通过babel对代码进行转码之后才能正常运行

1.安装babel以及presets

```shell
npm i babel-cli babel-preset-flow -D
```

2.配置package.json添加build命令调用babel

```json
    {
        "scripts":{
            "build":"babel ./src -d ./dist"
        }
    }
```

3.新建.babelrc文件添加

```json
    {
        "presets":[
            "flow"
        ]
    }
```

4.执行命令

```shell
npm run build
```

## Flow中的类型

|   type    |               explanation               | expresssion |
| :-------: | :-------------------------------------: | :---------: |
|  number   |         number / NaN / Infinity         |  a:number   |
|  string   |                 string                  |  s:string   |
|  boolean  |                 boolean                 |  b:boolean  |
|   null    |                  null                   |   n:null    |
|   void    |           undefinded ==>void            |             |
|   Array   |              Array\<type\>              |             |
|  Object   |       object 自由度较高，写法多样       |             |
|    any    |                any type                 |             |
| functions |                function                 |             |
|   maybe   | 运行我们声明一个包含null和undefined类型 |   ? type    |
| \|操作符  |         type1 \| type2 \| type3         |             |
| 类型推断  |           flow会尝试自行推断            |             |

