/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1.  a.  10
        50
 
    b.  Não apareceria nada no console

2.  a.  Ela pega a frase digitado pelo usuario coloca toda em minusculo e retorna um valor booleano true ou false dependendo do fato de
        ter ou não a palavra cenoura na frase
        
    b.  true
        true
        true
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.

function dadosPessoais(){
    
    console.log(`Eu sou Arlindo Vinícius, tenho 22 anos, moro em Itabuna e sou estudante.`);

}

function dadosPessoais2(){
    let nome = `Arlindo Vinicius`
    let idade = 22
    let cidade = `Itabuna`
    let ocupacao = `estudante`

    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`);

}

function dadosPessoais3(nome = `Arlindo Vinicius`, idade = 22, cidade = `Itabuna`, ocupacao = `estudante`){
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`);

}

//  2.  a

function soma1(num1, num2){
    num1 = 10
    num2 = 7
    let resultadoSoma = num1 + num2
    return resultadoSoma
}

const resultadoSoma = soma1()

console.log(`O resultado da soma é igual a: ${resultadoSoma}`)

//  2.   b

function igualdade(num1, num2){
    num1 = 2
    num2 = 3
    const resultadoIgualdade = num1 >= num2
    return resultadoIgualdade
}

//  2.  c

function par(num){
    num = 2
    const resto = num % 2
    const resultadoPar = resto === 0
    return resultadoPar
}

//  2.  d

function tamanhoMensagem(mensagem){
    mensagem = `Escreva a frase aqui`
    console.log(mensagem.length)
    console.log(mensagem.toUpperCase())
}

//  3.  

let soma, subtracao, divisao, multiplicacao
let number1 = Number(prompt(`Digite um numero:`))
let number2 = Number(prompt(`Digite outro numero:`))

function somar(){
    soma = number1 + number2
    return soma
}

function subtrair(){
    resultado = number1 - number2
    return resultado
}

function multiplicar(){
    resultado = number1 * number2
    return resultado
}

function dividir(){
    resultado = number1 / number2
    return resultado
}

console.log(`Numeros inseridos foram: ${number1} e ${number2}
Soma: ${soma = somar(number1, number2)}
Subtração: ${subtracao = subtrair(number1, number2)}
Multiplicação: ${multiplicacao = multiplicar(number1, number2)}
Divisão: ${divisao = dividir(number1, number2)}`)

// DESAFIOS

//  1.  

const arrow = (imprimi = ``) =>{
    console.log(imprimi);
}

const arrow2 = () =>{
    const num1 = 10
    const num2 = 500
    const resultadoSoma = num1 + num2
    arrow(resultadoSoma)
} 
arrow2()

//  2.

function teoremaDePitagoras(){
    const cat1 = 4
    const cat2 = 3
    let hipotenusa = Math.sqrt([(cat1 * cat1) + (cat2 * cat2)])
    console.log(hipotenusa);
}
teoremaDePitagoras()
