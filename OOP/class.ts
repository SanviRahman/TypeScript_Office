class Person
{
  sid:string;
  fName:string;
  lName:string;
  
  constructor(sid:string,fName:string,lName:string){
    this.sid=sid;
    this.fName=fName;
    this.lName=lName;
  }
  
  getFullName1():string
  {
    return `${this.fName} ${this.lName}`;
  }
  
}

let myObj1=new Person("201-15-3700","Sanvi","Rahman");
console.log(myObj1.getFullName1());