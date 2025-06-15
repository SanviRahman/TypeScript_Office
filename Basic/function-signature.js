var userInfo1;
var userInfo2;
// let userInfo3: (name:string,age:number) => string;
var userInfo3;
userInfo1 = function () {
    console.log("Sheikh Forid Ahmed Shanto");
};
userInfo1();
userInfo2 = function (name) {
    console.log("Your name is: ".concat(name));
};
userInfo2("Sheikh Forid Ahmed Shanto");
// userInfo3=(name:string,age:number)=>{
//     return (`Your name is: ${name} and Your age is: ${age}`);
// }
// console.log(userInfo3("Sheikh Forid Ahmed Shanto",25));
userInfo3 = function (name, age) {
    console.log("Your name is: ".concat(name, " and Your age is: ").concat(age));
};
userInfo3("Shanto", 25);
