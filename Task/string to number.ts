let ans=0;

function convertFunction(str:string):number{

    for(let i=0; i<str.length;i++)
    {
        let charCode=str.charCodeAt(i);

        const digit= charCode-48;
        
        ans=ans*10+digit;
    }
    return ans;
}

console.log(convertFunction("12345"));
console.log(typeof(ans));