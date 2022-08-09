// Exercicio 3 + desafio

let fs = require('fs');

let tarefas

fs.readFile('list.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    tarefas = data.split(",")
    if (process.argv[2]) {
        tarefas=[...tarefas, process.argv[2]]
        fs.writeFile('list.txt', `${tarefas}`, 'utf8', (err) => {
            if (err) {
                console.error(err);
                return
            }
            console.log("Tarefa Adicionada com sucesso!");
            console.log(tarefas);
        })

    }
  });


