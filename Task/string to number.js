var ans = 1;
function convertFunction(str) {
    for (var i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        var digit = char - 48;
        ans = ans * 10 + digit;
    }
    return ans;
}
console.log(convertFunction("12345"));
console.log(typeof (ans));
