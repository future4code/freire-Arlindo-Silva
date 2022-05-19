/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.  Ele está somando 0 + i e armazendo o valor da soma na variavel valor, enquanto o valor de i for menor que 5
    Sera impresso `10`

2a. 19
    21
    23
    25
    27
    30

2b. const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    let i = 0 

    for (let numero of lista) {
        console.log(i, numero)
         i++ 
    }

    OU

2b. Nesse abaixo eu usei o indexOf, mas como nao foi passado em aula eu coloquei como segunda opção

    const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
    for (let numero of lista) {
        if (numero >= lista.length -1) {
		    console.log(`${numero} está no indice ${lista.indexOf(numero)}`)
	    }
    }

3.  *
    **
    ***
    ****
    
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//  1.

const quantidadeBichos = Number(prompt(`Digite a quantidade de animais de estimação que você possui:`))
let listaAnimais = []

if (quantidadeBichos > 0) {
    for (let i = 0; i < quantidadeBichos; i++) {
        listaAnimais[i] = prompt(`Digite o nome do animal numero ${i+1}`)
        }
    console.log(listaAnimais)
    } else {
        console.log(`Que pena! Você pode adotar um pet`);
}

//  2.

const arrayOriginal = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
let arrayPares = [], arrayString = [], i = 0, indice = 0, maiorNumero = 0, menorNumero = 20000

//  a

const imprimeOriginais = () => {
    for (const numero of arrayOriginal) {
        console.log(numero);
    }
}

//  b

const originais10 = () => {
    for (const numero of arrayOriginal) {
        console.log(numero / 10);
    }
}

//  c

const originaisPares = () => {
    for (const numero of arrayOriginal) {
        if (numero % 2 === 0) {
            arrayPares[i] = numero
            i++
        }
    }    
    console.log(arrayPares);
}

//  d

const originaisString = () => {
    for (const numero of arrayOriginal) {
        arrayString[indice] = `O elemento do índex ${indice} é: ${numero}`
        indice++
    }
    console.log(arrayString);
}

//  e

const maiorMenor = () => {
    for (const numero of arrayOriginal) {
        if(numero <= menorNumero) {
            menorNumero = numero
        }else{
            maiorNumero = numero    
        }
    }
    console.log(`O maior número é: ${maiorNumero} e o menor número é: ${menorNumero}`);
}

//  DESAFIOS

//  1.

const numero = Number(prompt(`Digite um número:`))
console.log(`Vamos jogar!`)

let numeroChute = numero * 2, tentativas = 0

while (numeroChute !== numero) {
    numeroChute = Number(prompt(`Digite um número`))
    if (numeroChute > numero) {
        console.log(`O número chutado foi: ${numeroChute}`)
        console.log(`Errrrrrrrou, é menor`)
    }else if (numeroChute < numero){
        console.log(`O número chutado foi: ${numeroChute}`)
        console.log(`Errrrrrrrou, é maior`);
    }
    tentativas++
}

console.log(`O número chutado foi: ${numeroChute}`)
console.log(`Acertou!!`);
console.log(`O número de tentativas foi ${tentativas}`)

//  2.  Foi fácilll, pesquisei no google o método de sortear numeros e foi bingoo

const numero2 = Math.floor(Math.random() * 100 + 1)
console.log(`Vamos jogar!`)

let numeroChute2 = numero * 2, tentativas2 = 0

while (numeroChute2 !== numero2) {
    numeroChute2 = Number(prompt(`Digite um número`))
    if (numeroChute2 > numero2) {
        console.log(`O número chutado foi: ${numeroChute2}`)
        console.log(`Errrrrrrrou, é menor`)
    }else if (numeroChute2 < numero2){
        console.log(`O número chutado foi: ${numeroChute2}`)
        console.log(`Errrrrrrrou, é maior`);
    }
    tentativas++
}

console.log(`O número chutado foi: ${numeroChute2}`)
console.log(`Acertou!!`);
console.log(`O número de tentativas foi ${tentativas2}`)
