function display(sum:number){
    console.log(sum);
}
function add(a:number,b:number,callback:any){
    let sum:number=0;
    sum=a+b;
    if(sum){
        callback(sum);
    }
}
add(10,5,display);