interface IProfile{
    // function signature
    display: ()=>string;
}

class Teacher implements IProfile
{
    //private fullName:string;
    //private age:number;
    constructor(private fullName:string,private age:number){
        //this keyword na dileo hobe
        this.fullName=fullName;
        this.age=age;
    }

    display=()=>{
        return `Your Name: ${this.fullName}, Age: ${this.age}`;
    }
}

let myobj=new Teacher("Shanto",25);
console.log(myobj.display());