function convertSp(str:string,i:number,j:number):string{
    let char=str.split('');
    
    let temp;
    temp=char[i];
    char[i]=char[j];
    char[j]=temp;

    return char.join('');


}
function permutationMaker(str:string,left:number,right:number):void
{
    if (left==right){
        console.log(str);
        return;
    }
    for(let i=left; i<=right;i++){
        str=convertSp(str,left,i);
        permutationMaker(str,left+1,right);
    }
}
let s='abc';
permutationMaker(s,0,s.length-1);
