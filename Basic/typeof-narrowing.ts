function printTodo(todos:string[] | string)
{
    if(typeof todos === "object"){
        todos.map((todo)=> console.log(todo));
    }
    else if(typeof todos==="string"){
        console.log(todos);
    }
}
const todos = ["todos1","todos2"];
printTodo(todos);