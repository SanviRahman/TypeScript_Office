var userInfo1;
var userInfo2;
var userInfo3;
userInfo1 = function () {
    console.log("Sheikh Forid Ahmed Shanto");
};
userInfo1();
userInfo2 = function (name) {
    console.log("Your name is: ".concat(name));
};
userInfo2("Sheikh Forid Ahmed Shanto");
userInfo3 = function (name, age) {
    return ("Your name is: ".concat(name, " and Your age is: ").concat(age));
};
console.log(userInfo3("Sheikh Forid Ahmed Shanto", 25));
