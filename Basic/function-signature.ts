let userInfo1: () => void;
let userInfo2: (name:string) =>void;
let userInfo3: (name:string,age:number) => string;

userInfo1=()=>{
    console.log("Sheikh Forid Ahmed Shanto");
}
userInfo1();

userInfo2=(name:string)=>{
    console.log(`Your name is: ${name}`);
}
userInfo2("Sheikh Forid Ahmed Shanto");

userInfo3=(name:string,age:number)=>{
    return (`Your name is: ${name} and Your age is: ${age}`);
}
console.log(userInfo3("Sheikh Forid Ahmed Shanto",25));