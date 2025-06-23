let ans=1;

function convertFunction(str:string):number{

    for(let i=0; i<str.length;i++)
    {
        let char=str.charCodeAt(i);

        const digit= char-48;

        ans=ans*10+digit;
    }
    return ans;
}

console.log(convertFunction("12345"));
console.log(typeof(ans));