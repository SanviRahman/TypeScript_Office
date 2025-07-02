interface Person {
    sid: string;
    fname: string;
    lname: string;
}

let person1: Person = {
    sid: "201-15-3700",
    fname: "Sanvi",
    lname: "Rahman",
}

console.log(person1.fname + " " + person1.lname + ",ID:" + person1.sid);
