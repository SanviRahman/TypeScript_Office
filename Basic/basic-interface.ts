interface IUser{
    id:number;
    name:string;
    age:number;
}

//empty array initialize
let persons:IUser[]=[];

//for persion 1
let person1:IUser={
    id:1,
    name:"Shanto",
    age:24
}
//for persion 2
let person2:IUser={
    id:2,
    name:"Sanvi",
    age:25
}

persons.push(person1);
persons.push(person2);


persons.forEach((data)=>{
    console.log(`User ID: ${data.id},User name: ${data.name} and Age: ${data.age}`);
})














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

