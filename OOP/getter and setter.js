var Man = /** @class */ (function () {
    function Man(age, fName, lName) {
        this.age = age;
        this.fName = fName;
        this.lName = lName;
    }
    Object.defineProperty(Man.prototype, "canAge", {
        get: function () {
            return this.age >= 18;
        },
        enumerable: false,
        configurable: true
    });
    //public set canVote() {
    // if (theAge<18) {
    //     throw new Error("Tumi vote dite parbe na");
    // }
    // this.age = theAge;
    //}
    Man.prototype.getFullName = function () {
        return "".concat(this.fName, " ").concat(this.lName);
    };
    return Man;
}());
var obj11 = new Man(18, "Sanvi", "Rahman");
console.log(obj11.canAge);
