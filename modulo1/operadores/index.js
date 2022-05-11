/*
EXERCÍCIOS DE INTERPRETAÇÃO

1.  a. false
    b. false
    c. true
    d. boolean

2.  Os prompts retornarão duas variáveis do tipo string
    e devido a isso a os numeros não serão somados e sim
    concatenados.

3.  let primeiroNumero = Number(prompt("Digite um numero!"))
    let segundoNumero = Number(prompt("Digite outro numero!"))

    ||

    let primeiroNumeroString = prompt("Digite um numero!")
    let primeiroNumero = Number(primeironumeroString)
    let segundoNumeroString = prompt("Digite outro numero!")
     let segundoNumero = Number(segundonumeroString)

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// EXERCICIO 1

let idadeUsuario = Number(prompt("Digite a sua idade"))
let idadeAmigue = Number(prompt("Digite a idade de su melhor amigue:"))

let resultado = idadeUsuario === idadeAmigue

console.log("Sua idade é maior do que a do seu melhor amigo?", resultado);
console.log("A diferença de idade entre você e su amigue é:", idadeUsuario - idadeAmigue, "ano(s)");

// EXERCICIO 2

let numeroPar = Number(prompt("Digite um número par:"))
let resto = numeroPar % 2

console.log("O resto da divisão do número", numeroPar, "por 2 é igual a:", resto);
// Note que enquanto o usuario digitar numeros pares o resto da divisão sempre será 0 pois qualquer numero par dividido por 2 retorna um valor inteiro
// Se o usuario digitar um numero impar o programa irá retornar 1

// EXERCICIO 3

let idadeEmAnos = Number(prompt("Digite sua idade em anos:"))

console.log("Sua idade em meses é:", idadeEmAnos * 12, "meses");
console.log("Sua idade em dias é:", (idadeEmAnos * 12) * 30), "dias";
console.log("Sua idade em horas é:", ((idadeEmAnos * 12) * 30) * 24, "horas");

// EXERCICIO 4

let a = Number(prompt("Digite um número:"))
let b = Number(prompt("Digite mais um número:"))

console.log("O primeiro número é maior que o segundo?", a > b);
console.log("O primeiro número é igual ao segundo?", a === b);
console.log("O primeiro número é divisível pelo segundo", a % b === 0);
console.log("O segundo número é divisível pelo primeiro", b % a === 0);

// EXERCICIOS DESAFIO

// DESAFIO 1

let fah = 77
console.log(fah+'°F');
let fahToKel = (fah - 32) * (5 / 9) + 273.15
console.log(fah+'°F é igual a: '+fahToKel+'K');

let cel = 80
console.log(cel+'°C');
let celToFah = (cel * (9 / 5)) + 32
console.log(cel+'°C é igual a: '+celToFah+'°F');

cel = 30
console.log(cel+'°C');
celToFah = (cel * (9 / 5)) + 32
console.log(cel+'°C é igual a: '+celToFah+'°F');
fah = celToFah
fahToKel = (fah - 32) * (5 / 9) + 273.15
console.log(fah+'°F é igual a: '+fahToKel+'K');

cel = Number(prompt("Digite o valor em graus Celsius que para converter para °F e K"))
console.log(cel+'°C');
celToFah = (cel * (9 / 5)) + 32
console.log(cel+'°C é igual a: '+celToFah+'°F');
fah = celToFah
fahToKel = (fah - 32) * (5 / 9) + 273.15
console.log(fah+'°F é igual a: '+fahToKel+'K');


// DESAFIO 2

let quilowattHora = 0.05

let x = 280
let valor = quilowattHora * x
console.log('O valor a ser pago pelos '+x+' quilowatts consumidos é: '+valor+'R$');

let valorComDesconto = (valor * 0.15) - valor
console.log('O valor a ser pago pelos '+x+' quilowatts consumidos é: '+valorComDesconto+'R$');

// DESAFIO 3

let lb, oz, mi, ft, gal, xic 
let lbToKg, ozToKg, miToM, ftToM, galToL, xicToL

lb = 20
lbToKg = lb / 2.2046
console.log(lb+' lb equivalem a: '+lbToKg+' Kg');

oz = 10.5
ozToKg = oz / 35,274
console.log(oz+' oz equivalem a: '+ozToKg+' Kg');

mi = 100
miToM = mi * 1609
console.log(mi+' mi equivalem a: '+miToM+' m');

ft = 50
ftToM = ft  / 3.281
console.log(ft+' pés equivalem a: '+ftToM+' m');

gal = 103.56
galToL = gal * 3.785
console.log(gal+' gal equivalem a: '+galToL+' l');

xic = 450
xicToL = xic * 0.24
console.log(xic+' xic equivalem a: '+xicToL+' l');

lb = Number(prompt("Digite um valor em libras"))
lbToKg = lb / 2.2046
console.log(lb+' lb equivalem a: '+lbToKg+' Kg');

