function swap(str, i, j) {
    var _a;
    var char = str.split('');
    _a = [char[j], char[i]], char[i] = _a[0], char[j] = _a[1];
    return char.join('');
}
function perMutation(str, left, right) {
    //Base condition
    if (left == right) {
        console.log(str);
        return;
    }
    var i = left;
    while (i <= right) {
        str = swap(str, left, i);
        perMutation(str, left + 1, right);
        str = swap(str, left, i);
        i++;
    }
}
var s = "abc";
perMutation(s, 0, s.length - 1);
