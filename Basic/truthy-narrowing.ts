function printTodos(todoss:string[]| null)
{
    if (todoss){
        todoss.map((todo)=>console.log(todo));
    }
    else{
        console.log("No Todos");
    }
}
// const todoss=["todos1","todos2"];
const todoss=null;
printTodos(todoss);