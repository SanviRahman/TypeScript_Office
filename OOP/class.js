var Person = /** @class */ (function () {
    function Person(sid, fName, lName) {
        this.sid = sid;
        this.fName = fName;
        this.lName = lName;
    }
    Person.prototype.getFullName1 = function () {
        return "".concat(this.fName, " ").concat(this.lName);
    };
    return Person;
}());
var myObj1 = new Person("201-15-3700", "Sanvi", "Rahman");
console.log(myObj1.getFullName1());
