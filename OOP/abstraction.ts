abstract class UserProfiles{
    userName:string;
    age:number;


    constructor(userName:string,age:number)
    {
        this.userName=userName;
        this.age=age;
    }

    abstract display():void;

}

class Teachers extends UserProfiles{
    studentID:number;
    constructor(userName:string,age:number,studentID:number)
    {
        super(userName,age);
        this.studentID=studentID;
    }
    display(){
        console.log(`Your name is: ${this.userName}, age is: ${this.age} and Your ID is: ${this.studentID}`);
    }
}

let obj1=new Teachers("Shanto",25,101);
obj1.display();
