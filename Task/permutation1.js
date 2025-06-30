function convertSp(str, i, j) {
    var char = str.split('');
    var temp;
    temp = char[i];
    char[i] = char[j];
    char[j] = temp;
    return char.join('');
}
function permutationMaker(str, left, right) {
    if (left == right) {
        console.log(str);
        return;
    }
    for (var i = left; i <= right; i++) {
        str = convertSp(str, left, i);
        permutationMaker(str, left + 1, right);
    }
}
var s = 'abc';
permutationMaker(s, 0, s.length - 1);
