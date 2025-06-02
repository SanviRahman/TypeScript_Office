interface IProfile{
    display: ()=>string;
}

class Teacher implements IProfile
{
    constructor(private fullName:string,private age:number){}

    display=()=>{
        return `Your Name: ${this.fullName}, Age: ${this.age}`;
    }
}

let myobj=new Teacher("Shanto",25);
console.log(myobj.display());