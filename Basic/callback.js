function display(sum) {
    console.log(sum);
}
function add(a, b, callback) {
    var sum = 0;
    sum = a + b;
    if (sum) {
        callback(sum);
    }
}
add(10, 5, display);
