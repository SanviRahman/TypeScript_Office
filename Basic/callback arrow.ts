function myFunc(sum:number):void{
    console.log(sum);
}
const mydisplay=((num1:number,num2:number,callback:any):any=>{
    let sum:number=0;
    sum=num1+num2;
    if(sum){
        callback(sum);
    }
})
mydisplay(15,7,myFunc);