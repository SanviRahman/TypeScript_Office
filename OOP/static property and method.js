var Counter = /** @class */ (function () {
    function Counter() {
    }
    Counter.increment = function () {
        Counter.count++;
    };
    Counter.getCount = function () {
        return Counter.count;
    };
    Counter.count = 0;
    return Counter;
}());
//kuno object bananu hoi ni
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();
var frq = Counter.getCount();
console.log(frq);
