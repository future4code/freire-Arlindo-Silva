/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1a. O código pede ao usuario um numero e imprime "Passou no teste" 
    caso o resto da divisão dele por 2 for 0, caso contrario será 
    impresso "Não passou no teste" 

1b. Numeros pares

1c. Numeros impares

2a. Para receber uma fruta do usuario e retornar uma mensagem com seu valor

2b. O preço da fruta Maça é R$ 2.25

2c. O preço da fruta Pêra é R$ 5

3a. Declarando uma variavel const que sera solicitada ao usuario e sera do tipo Number

3b. Caso 10: Esse número passou no teste
    Caso -10: Não sera impresso nada no terminal

3c. Sim pois a variavel "mensagem" foi declarada dentro do escopo do bloco if,
    sendo assim ela não pode ser acessada no escopo global, a solução seria
    declarar a variavel "mensagem" antes do if

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//  1.

const idade = Number(prompt(`Digite sua idade:`))

if (idade >= 18){
    console.log(`Você pode dirigir`);
    }else{
        console.log(`Você não pode dirigir`);
    }

//  2.

const turno = prompt(`Digite em que turno estuda, sendo M para Matutino, V para Vespertino e N para Noturno:`).toUpperCase()

if(turno === `M`){
    console.log(`Bom dia!`);
}else if(turno === `V`){
    console.log(`Boa tarde!`);
}else if(turno === `N`){
    console.log(`Boa noite!`);
}else{
    console.log(`Digite uma das opções válidas!`);
}

//  3.

const turnoSwitch = prompt(`Digite em que turno estuda, sendo M para Matutino, V para Vespertino e N para Noturno:`).toUpperCase()

switch (turnoSwitch) {
    case `M`:
        console.log(`Bom dia!`)
        break;
    case `V`:
        console.log(`Boa tarde!`)
        break;
    case `N`:
        console.log(`Boa noite!`)
        break;
    default:
        console.log(`Digite uma das opções válidas!`);
        break;
}

//  4.

const generoFilme = prompt(`Digite o gênero do filme:`).toLowerCase() === `fantasia`
const precoFilme = Number(prompt(`Digite o preço do filme:`)) < 15

if(generoFilme && precoFilme){
    console.log(`Bom filme!`);
}else{
    console.log(`Escolha outro filme :(`);
}

//  DESAFIOS

//  1.

const generoFilme2 = prompt(`Digite o gênero do filme:`).toLowerCase() === `fantasia`
const precoFilme2 = Number(prompt(`Digite o preço do filme:`)) < 15

if(generoFilme2 && precoFilme2){
    const lanche = prompt(`Qual lanchinho você vai querer?`)
    console.log(`Bom filme! Aproveite o(a) seu(sua) ${lanche}`);
}else{
    console.log(`Escolha outro filme :(`);
}

//  2.

const nomeCompleto = prompt(`Digite o seu nome completo:`).toUpperCase()
let tipoJogo = prompt(`Digite o tipo de jogo: IN para internacional e DO para doméstico`).toUpperCase()
let etapaJogo = prompt(`Digite a etapada do jogo: SF para semi-final, DT para decisão de terceiro lugar e FI para final`).toUpperCase()
let categoria = Number(prompt(`Digite a categoria: 1, 2, 3 ou 4`))
let quantidadeIngressos = Number(prompt(`Digite a quantidade de ingressos necessarios:`))
let valorTotal, valorIngresso

switch (tipoJogo) {
    case `IN`:
        tipoJogo = `Internacional`
        break;
    case `DO`:
        tipoJogo = `Nacional`
        break;
    default:
        console.log(`Digite um tipo de Jogo valido!`);
        break;
}
console.log(tipoJogo);

switch (etapaJogo) {
    case `SF`:
        etapaJogo = `Semi-Final`
        break;
    case `DT`:
        etapaJogo = `Decisão do terceiro lugar`
        break;
    case `FI`:
        etapaJogo = `Final`    
    default:
        break;
}
console.log(etapaJogo);

const imprimir = () =>{
    console.log(`---Dados da Compra---
    Nome do Cliente: ${nomeCompleto}
    Tipo de Jogo: ${tipoJogo}
    Etapa do Jogo: ${etapaJogo}
    Categoria: ${categoria}
    Quantidade de Ingressos: ${quantidadeIngressos} ingressos
    
    ---Valores---
    Valor do Ingresso: R$ ${valorIngresso}
    Valor Total: R$ ${valorTotal}
    `);

}

if(etapaJogo === `Semi-Final`){
    if (categoria === 1) {
        valorIngresso = 1320    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
           console.log(`Digite um tipo de Jogo valido!`);
       }
    }else if (categoria === 2) {
        valorIngresso = 880    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }        
    }else if (categoria === 3) {
        valorIngresso = 550    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }        
    }else if (categoria === 4) {
        valorIngresso = 220    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }
    }else{
        console.log(`Digite uma categoria válida!`);
    }
}else if (etapaJogo === `Decisão do terceiro lugar`) {
    if (categoria === 1) {
        valorIngresso = 660    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }
    }else if (categoria === 2) {
        valorIngresso = 440    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }        
    }else if (categoria === 3) {
        valorIngresso = 330   
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }        
    }else if (categoria === 4) {
        valorIngresso = 170   
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }
    }else{
        console.log(`Digite uma categoria válida!`);
    }
    
}else if (etapaJogo === `Final`) {
    if (categoria === 1) {
        valorIngresso = 1980    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }
    }else if (categoria === 2) {
        valorIngresso = 1320   
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }        
    }else if (categoria === 3) {
        valorIngresso = 880  
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }        
    }else if (categoria === 4) {
        valorIngresso = 330    
       if(tipoJogo === `Nacional`){
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else if (tipoJogo === `Internacional`) {
            valorIngresso = valorIngresso * 4.10   
            valorTotal = valorIngresso * quantidadeIngressos
            imprimir()
       }else{
        console.log(`Digite um tipo de Jogo valido!`);
    }
    }else{
        console.log(`Digite uma categoria válida!`);
    }
    
}else{
    console.log(`Digite uma etapa de jogo válida!`);
}












