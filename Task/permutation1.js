function convertSwap(str, i, j) {
    var _a;
    var char = str.split('');
    _a = [char[j], char[i]], char[i] = _a[0], char[j] = _a[1];
    return char.join('');
}
function permutationMaker(str, left, right) {
    if (left == right) {
        console.log(str);
        return;
    }
    for (var i = left; i <= right; i++) {
        str = convertSwap(str, left, i);
        permutationMaker(str, left + 1, right);
    }
}
var s = 'abc';
permutationMaker(s, 0, s.length - 1);
