function swap(str:string,i:number,j:number):string{
    let char =str.split('');
    [char[i],char[j]]=[char[j],char[i]];
    return char.join('');
}


function perMutation(str:string,left:number,right:number):void
{
    //Base condition
    if(left==right)
    {
        console.log(str);
        return;
    }

    var i=left;
    while(i<=right)
    {
        str=swap(str,left,i);
        perMutation(str,left+1,right);
        str=swap(str,left,i);
        i++;
    }
}


let s="abc";
perMutation(s,0,s.length-1);
