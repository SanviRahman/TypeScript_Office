class AnyUser
{
    readonly proUser:string;
    public age:number;

    constructor(proUser:string,age:number)
    {
        this.proUser=proUser;
        this.age=age;
    }
    display(){
        console.log(`User name is: ${this.proUser} and ${this.age}`);
    }
    
}
 class Staff extends AnyUser
 {
    private studentID:number;

    
    constructor(proUser:string,age:number,studentID:number)
    {
        super(proUser,age);
        this.studentID=studentID;
    }
     display(){
        console.log(`User name is: ${this.proUser} and ${this.age} and ID is: ${this.studentID}\n`);
    }

    setstudentID(studentID:number)
    {
        this.studentID=studentID;
    }


    getstudentID()
    {
        return this.studentID;
    }
    show()
    {
        console.log(`New ID is: ${this.studentID}`)
    }

 }

 let myObject= new Staff("Shanto",25,101);
 myObject.setstudentID(102);
//  myObject.display();
//  myObject.getstudentID;
myObject.show();