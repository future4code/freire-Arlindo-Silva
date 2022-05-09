
/* Exercícios de interpretação de código

1. Será impresso no console:
    10
    10 5

2. Será impresso no console:

    10 10 10

3. Nome das variaveis:

    p = horasPorDia
    t = pagamentoPorDia
*/

//PRIMEIRO PROGRAMA

let nome 
let idade

console.log(typeof nome)
console.log(typeof idade)

// //foi impresso o tipo úndefined' pois não foi atribuido nenhum valor as variaveis

nome = prompt("Qual o seu nome?")
idade = prompt("Qual a sua idade?")

console.log(typeof nome)
console.log(typeof idade)

//Agora os tipos de variaveis retornadas foi 'string' 
//pois foi atribuido pelo usuario um valor a essas variaveis 
//através do prompt que retorna uma variavel do tipo string

console.log("Olá", nome,", você tem", idade, "anos")

// SEGUNDO PROGRAMA

let respostaUm
let respostaDois
let respostaTres

const primeiraPergunta = "Você é brasileiro?"
const segundaPergunta = "Você gosta do Brasil?"
const terceiraPergunta = "Você mora no Brasil?"
 
respostaUm = prompt(primeiraPergunta)
respostaDois = prompt(segundaPergunta)
respostaTres = prompt(terceiraPergunta)

console.log(primeiraPergunta, "-", respostaUm)
console.log(segundaPergunta, "-", respostaDois)
console.log(terceiraPergunta, "-", respostaTres)

// TERCEIRO PROGRAMA

let a = 10
let b = 25
let c

c = b
b = a 
a = c

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)


//PROGRAMA DESAFIO

console.log("Desafio Extra:")

let primeiroNumero = prompt("Digite o valor do primeiro número:")
let x = Number(primeiroNumero)
let segundoNumero = prompt("Digite o valor do segundo número:")
let y = Number(segundoNumero)
let z
let w

z = x + y
w = x * y

console.log("O primeiro número somado ao segundo número resulta em:", z)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", w)

