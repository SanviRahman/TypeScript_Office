function printTodo(todoss) {
    if (todoss) {
        todoss.map(function (todo) { return console.log(todo); });
    }
    else {
        console.log("No Todos");
    }
}
// const todoss=["todos1","todos2"];
var todoss = null;
printTodo(todoss);
