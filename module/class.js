"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var Profile = /** @class */ (function () {
    function Profile(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Profile.prototype.display = function () {
        console.log("Your name is: ".concat(this.userName, " and age is: ").concat(this.age));
    };
    return Profile;
}());
exports.Profile = Profile;
