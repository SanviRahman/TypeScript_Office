class Man {
    private age: number;
    private fName: string;
    private lName: string;


    constructor(age: number, fName: string, lName: string) {
        this.age = age;
        this.fName = fName;
        this.lName = lName;
    }

    public get canAge():boolean {
        return this.age>=18;
    }

    //public set canVote() {
        // if (theAge<18) {
        //     throw new Error("Tumi vote dite parbe na");
        // }
        // this.age = theAge;

    //}

   
    getFullName(): string {
        return `${this.fName} ${this.lName}`;
    }

}
let obj11 = new Man(18, "Sanvi", "Rahman");
console.log(obj11.canAge);
