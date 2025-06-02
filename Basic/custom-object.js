var news;
news = [];
var user3;
user3 = {
    userName: "Shanto",
    userID: 101
};
news.push(user3);
var user4;
user4 = {
    userName: "Sanvi",
    userID: 102
};
news.push(user4);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
