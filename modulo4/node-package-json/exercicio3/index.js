// Exercicio 3

let tarefas = [
    "Comprar pão",
    "Ir a praia"
]

if (process.argv[2]) {
    console.log("Tarefa Adicionada com sucesso!");
    tarefas=[...tarefas, process.argv[2]]
    console.log(tarefas);
}

