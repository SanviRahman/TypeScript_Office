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
var AnyUser = /** @class */ (function () {
    function AnyUser(proUser, age) {
        this.proUser = proUser;
        this.age = age;
    }
    AnyUser.prototype.display = function () {
        console.log("User name is: ".concat(this.proUser, " and ").concat(this.age));
    };
    return AnyUser;
}());
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff(proUser, age, studentID) {
        var _this = _super.call(this, proUser, age) || this;
        _this.studentID = studentID;
        return _this;
    }
    Staff.prototype.display = function () {
        console.log("User name is: ".concat(this.proUser, " and ").concat(this.age, " and ID is: ").concat(this.studentID, "\n"));
    };
    Staff.prototype.setstudentID = function (studentID) {
        this.studentID = studentID;
    };
    Staff.prototype.getstudentID = function () {
        return this.studentID;
    };
    Staff.prototype.show = function () {
        console.log("New ID is: ".concat(this.studentID));
    };
    return Staff;
}(AnyUser));
var myObject = new Staff("Shanto", 25, 101);
myObject.setstudentID(102);
//  myObject.display();
//  myObject.getstudentID;
myObject.show();
