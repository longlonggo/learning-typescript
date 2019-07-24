class People{

    private _name:string=''
    
    
    get name():string{
        return this._name;
    }
    

    set name(value:string){

        if(value.length<2||value.length>5){
            throw new Error('名字不合法，不允许使用！')
            
        }

        this._name=value
    }
}

let p =new People();
p.name="娶你吗的几包毛是的是的晒带"

console.log(p.name);
