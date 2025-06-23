function swap(str:string,i:number,j:number){
    const char=str.split('');
    [char[i],char[j]]=[char[j],char[i]];
    return char.join('');
}
function perMutation1(str:string,left:number,right:number)
{
    for(let i=left; i<=str.length;i++){
        swap(str,left,i);
        perMutation1(str,left+1,right)
    }
}
let s1='abc';
perMutation1(s1,0,s1.length-1);