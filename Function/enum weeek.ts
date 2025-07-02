enum Weak{Sat,Sun,Mon,Tus,Wed,Thus,Fri};

function holyday(weak:Weak):boolean{
  let isHolyday:boolean;
  switch (weak) {
    case Weak.Sat:
      isHolyday=true;
      break;
    case Weak.Fri:
      isHolyday=true;
      break;
    default:
      isHolyday=false;
      break;
  }
  return isHolyday;
}

console.log(holyday(Weak.Fri));
console.log(holyday(Weak.Sun));