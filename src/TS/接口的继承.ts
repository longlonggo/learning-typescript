

interface TwoDPoint{
    x:number;
    y:number
}

interface ThreeDPoint extends TwoDPoint{
    z:number
}


interface FourDPoint extends ThreeDPoint{
    time:Date
}

let poi3:ThreeDPoint={
    x:100,
    y:10,
    z:2
}

let poi4:FourDPoint={
    x:100,
    y:10,
    z:2,
    time:new Date()
}


class Bird{
    type:string ='什么鬼'
    fly():void{

    }
}

interface Fly extends Bird{

}

let f:Fly={
    type:'设能',
    fly(){}
}