var Weak;
(function (Weak) {
    Weak[Weak["Sat"] = 0] = "Sat";
    Weak[Weak["Sun"] = 1] = "Sun";
    Weak[Weak["Mon"] = 2] = "Mon";
    Weak[Weak["Tus"] = 3] = "Tus";
    Weak[Weak["Wed"] = 4] = "Wed";
    Weak[Weak["Thus"] = 5] = "Thus";
    Weak[Weak["Fri"] = 6] = "Fri";
})(Weak || (Weak = {}));
;
function holyDay(weak) {
    var isHolyday;
    switch (weak) {
        case Weak.Sat:
            isHolyday = true;
            break;
        case Weak.Sun:
            isHolyday = false;
            break;
        case Weak.Mon:
            isHolyday = false;
            break;
        case Weak.Tus:
            isHolyday = false;
            break;
        case Weak.Wed:
            isHolyday = false;
            break;
        case Weak.Thus:
            isHolyday = false;
            break;
        case Weak.Fri:
            isHolyday = true;
            break;
        default:
            isHolyday = false;
            break;
    }
    return isHolyday;
}
// console.log(holyDay(Weak.Mon));
// console.log(holyDay(Weak.Sat));
var khula = holyDay(Weak.Mon);
var bondho = holyDay(Weak.Fri);
console.log(bondho + "\n" + khula);
