class MyClass
{
    static count:number =10;
    static sayHello():void{
        console.log("Hello from static method!");
    }
}

console.log(MyClass.count);
MyClass.sayHello();

// let myObj1=new MyClass();
// console.log(myObj1);
