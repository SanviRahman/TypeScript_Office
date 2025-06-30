class Counter
{
    static count:number=0;

    static increment():void
    {
        Counter.count++;
    }

    static getCount():number
    {
        return Counter.count;
    }
}

//kuno object bananu hoi ni
Counter.increment();
Counter.increment();
Counter.increment();
Counter.increment();

let frq=Counter.getCount();
console.log(frq);