/* EXERCÍCIOS DE INTERPRETAÇÃO

1.  a. undefined
    b. null
    c. 11
    d. 3
    e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13
    f. 8 // resposta correta é 9 (executei o código)

2.  SUBI NUM ÔNIBUS EM MIRROCOS 27

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

let nome = prompt(`Digite o seu nome:`)
let email = prompt(`Digite o seu email:`)

console.log(`O e-mail ${email.trim()} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome.trim()}!`);

// 2.

const comidas = [`Pizza`, `Lasanha`, `Açai`, `Puré`, `Sopa`]

console.log(comidas);

console.log(`Essas são minhas comidas preferidas:`);
console.log(comidas[0]);
console.log(comidas[1]);
console.log(comidas[2]);
console.log(comidas[3]);
console.log(comidas[4]);

comidas[1] = prompt(`Digite sua comida favorita:`)
console.log(comidas);

// 3.

let listaDeTarefas = []

listaDeTarefas[0] = prompt(`Digite sua primeira tarefa (0):`)
listaDeTarefas[1] = prompt(`Digite sua segunda tarefa (1):`)
listaDeTarefas[2] = prompt(`Digite sua terceira tarefa (2):`)

console.log(listaDeTarefas);

let realizada = prompt(`Digite o índice de uma tarefa já realizada(0, 1 ou 2):`)
listaDeTarefas.splice(realizada, 1)
console.log(listaDeTarefas);

// DESAFIOS

1.

let frase = prompt(`Digite uma frase:`);
frase = frase.split(` `)

console.log(frase);

// 2.

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas);
console.log(`Indice da palavra Abacaxi é: ${frutas.indexOf("Abacaxi")}, tamanho do Array: ${frutas.length}`)
