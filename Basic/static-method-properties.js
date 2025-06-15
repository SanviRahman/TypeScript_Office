var MyClass = /** @class */ (function () {
    function MyClass() {
    }
    MyClass.sayHello = function () {
        console.log("Hello from static method!");
    };
    MyClass.count = 10;
    return MyClass;
}());
console.log(MyClass.count);
MyClass.sayHello();
// let myObj1=new MyClass();
// console.log(myObj1);
