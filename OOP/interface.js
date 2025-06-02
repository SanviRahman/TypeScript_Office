var Teacher = /** @class */ (function () {
    //private fullName:string;
    //private age:number;
    function Teacher(fullName, age) {
        var _this = this;
        this.fullName = fullName;
        this.age = age;
        this.display = function () {
            return "Your Name: ".concat(_this.fullName, ", Age: ").concat(_this.age);
        };
        //this keyword na dileo hobe
        this.fullName = fullName;
        this.age = age;
    }
    return Teacher;
}());
var myobj = new Teacher("Shanto", 25);
console.log(myobj.display());
