let users:object[];
users=[];
let user1: {
    userName:string,
    userID: number
}
user1={
    userName:"Shanto",
    userID: 101
}

let user2: {
    userName:string,
    userID: number
}
user2={
    userName:"Sanvi",
    userID: 102
}

users.push(user1);
users.push(user2);

console.log(users);
