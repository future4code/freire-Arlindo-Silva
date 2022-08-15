
// Exercicio 1 + desafio

// a) process.argv[2]  (3, 4, 5...) 

// b) e c)

let red, blue, reset;
red   = '\u001b[31m';
blue  = '\u001b[34m';
reset = '\u001b[0m';

const nome = process.argv[2] 
const idade = process.argv[3] 

switch (process.argv.length) {
    case 4:
        console.log(blue + `Olá, ${nome}! Você tem ${idade} anos.`);
        console.log(blue + `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${Number(idade) + 7}`);
        break;
    case 3:
        console.log(red + "Esperava 2 parâmetros só recebi um.");
        break;
    case 2:
        console.log(red + "Esperava 2 parâmetros não recebi nenhum.");
        break;
    default:
        console.log(red + "Esperava apenas 2 parâmetros e recebi mais de 2")
        break;
}

console.log(frase);



