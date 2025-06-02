export class Profile{
    userName:string;
    age:number;


    constructor(userName:string,age:number)
    {
        this.userName=userName;
        this.age=age;
    }

    display(){
        console.log(`Your name is: ${this.userName} and age is: ${this.age}`);
    }
}