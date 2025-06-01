var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var UserProfiles = /** @class */ (function () {
    function UserProfiles(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    return UserProfiles;
}());
var Teachers = /** @class */ (function (_super) {
    __extends(Teachers, _super);
    function Teachers(userName, age, studentID) {
        var _this = _super.call(this, userName, age) || this;
        _this.studentID = studentID;
        return _this;
    }
    Teachers.prototype.display = function () {
        console.log("Your name is: ".concat(this.userName, ", age is: ").concat(this.age, " and Your ID is: ").concat(this.studentID));
    };
    return Teachers;
}(UserProfiles));
var obj1 = new Teachers("Shanto", 25, 101);
obj1.display();
