function myFunc(sum) {
    console.log(sum);
}
var mydisplay = (function (num1, num2, callback) {
    var sum = 0;
    sum = num1 + num2;
    if (sum) {
        callback(sum);
    }
});
mydisplay(5, 7, myFunc);
