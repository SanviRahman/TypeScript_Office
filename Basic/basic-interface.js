//empty array initialize
var persons = [];
//for persion 1
var person1 = {
    id: 1,
    name: "Shanto",
    age: 24
};
//for persion 2
var person2 = {
    id: 2,
    name: "Sanvi",
    age: 25
};
persons.push(person1);
persons.push(person2);
persons.forEach(function (data) {
    console.log("User ID: ".concat(data.id, ",User name: ").concat(data.name, " and Age: ").concat(data.age));
});
// let names = [{name:'shihab' , role:'admin'} , {name:'rakib' , role:'employee'}];
// names.forEach((items:any)=>{
//     console.log(items , 'from foreach');
// })
// names.map((data:any)=>{
//     console.log(data , 'from map')
// })
// for(let i = 0 ; names.length > i; i++){
//     console.log(names[i].name)
// }
