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
function holyday(weak) {
    var isHolyday;
    switch (weak) {
        case Weak.Sat:
            isHolyday = true;
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
console.log(holyday(Weak.Fri));
console.log(holyday(Weak.Sun));
