type User= {
    userName:string,
    userID: number
}

let news: User[];
news = [];

let user3: User;
user3={
    userName:"Shanto",
    userID: 101
}
news.push(user3);


let user4: User;
user4={
    userName:"Sanvi",
    userID: 102
}
news.push(user4);

// console.log(users);

type RequestType = "GET" | "POST";
let getRequest:RequestType;
getRequest="GET";


function requestHandler(requestType:RequestType)
{
    console.log(requestType);
}
requestHandler("GET");

