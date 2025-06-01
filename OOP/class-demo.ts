class Users{
    userName:string;
    age:number;


    constructor(userName:string,age:number)
    {
        this.userName=userName;
        this.age=age;
    }

    display():void{
        console.log(`Your name is: ${this.userName} and age is: ${this.age}`);
    }
}

let myObj= new Users("Shanto",25);
myObj.display();