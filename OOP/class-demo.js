var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("Your name is: ".concat(this.userName, " and age is: ").concat(this.age));
    };
    return Users;
}());
var myObj = new Users("Shanto", 25);
myObj.display();
