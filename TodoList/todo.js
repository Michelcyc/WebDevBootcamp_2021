let input = 'nada';
const todolist = [];
while (input !== "quit") {
    input = prompt("Entre com o input");
    if (input === "new") {
        let item = prompt("Entre com o item");
        todolist.push(item);
        console.log(`${item} adicionado à lista`);
    }
    else if (input === "list") {
        for (let index = 0; index < todolist.length; index++) {
            const element = todolist[index];
            console.log(`${index}: ${element}`);
        }
    }
    else if (input === "delete") {
        let item = prompt("Informe o numero do item que irá remover");
        todolist.splice(item, 1);
    }
    console.log(todolist);
}
