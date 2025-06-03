function printTodo(todos) {
    if (typeof todos === "object") {
        todos.map(function (todo) { return console.log(todo); });
    }
    else if (typeof todos === "string") {
        console.log(todos);
    }
}
var todos = ["todos1", "todos2"];
printTodo(todos);
