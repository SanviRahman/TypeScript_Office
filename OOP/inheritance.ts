class UserProfile{
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

class Students extends UserProfile{
    studentID:number;
    constructor(userName:string,age:number,studentID:number)
    {
        super(userName,age);
        this.studentID=studentID;
    }
    show()
    {
        console.log(`The student ID is: ${this.studentID}`);
    }
}

let obj=new Students("Shanto",25,101);
obj.display();
obj.show();
