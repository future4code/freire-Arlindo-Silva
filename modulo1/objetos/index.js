/* EXERCÍCIOS DE INTERPRETAÇÃO DE CÓDIGO

1a.  Matheus Nachtergaele
    Virginia Cavandish
    Object 
        canal: "Globo"
        horario: "14h"

2a.  {nome: 'Juca', idade: 3, raca: 'SRD'}
        nome: "Juca"
        idade: 3
        raca: "SRD"

    {nome: 'Juba', idade: 3, raca: 'SRD'}
        nome: "Juba"
        idade: 3
        raca: "SRD"         
 
    {nome: 'Jubo', idade: 3, raca: 'SRD'}
        nome: "Jubo"
        idade: 3
        raca: "SRD"                 

2b. Ela faz uma cópia do objeto (Espalhamento ou spread)

3a. false
    undefined

3b. o valor da propriedade 'backender' está definido no objeto como false e o valor 'altura' não, por isso retornou undefined

*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//  1.  

const pessoa = {
    nome: 'Arlindo Vinicius',
    apelidos: ['Vini', 'Perroni', 'Ar']
}

const imprimeFrase = (objeto) =>{
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]}, ${objeto.apelidos[1]} ou ${objeto.apelidos[2]}`);
}

imprimeFrase(pessoa)

const pessoa2 = {
    ...pessoa,
    apelidos: [`Lindo`, `Rony`, `Irmão do Pop`]
}

imprimeFrase(pessoa2)

//  2.

const pessoa3 = {
    nome: `Walter Neto`,
    idade: 19,
    profissao: `costureiro`
}

const retornaArray = (objeto) => {
    return [objeto.nome, objeto.nome.length, objeto.idade, objeto.profissao, objeto.profissao.length]
}

//  3.

let carrinho = []

const fruta1 = {
    nome: `Maça`,
    disponibilidade: true
}
const fruta2 = {
    nome: `Pera`,
    disponibilidade: false
}
const fruta3 = {
    nome: `Uva`,
    disponibilidade: true
}

const compras = (fruta) =>{
    carrinho.push(fruta)
    return carrinho
}

compras(fruta1)
compras(fruta2)
compras(fruta3)

console.log(carrinho);

// DESAFIO 3

const estoque = (fruta) =>{
    return {...carrinho,
    disponibilidade: !fruta.disponibilidade}
}

// ESSA PARTE ABAIXO EU FIZ POR CONTA PRÓPRIA 

const estoqueFruta1 = estoque(fruta1)
console.log(`Precisa de reposição de ${fruta1.nome}? ${estoqueFruta1.disponibilidade}`);
const estoqueFruta2 = estoque(fruta2)
console.log(`Precisa de reposição de ${fruta2.nome}? ${estoqueFruta2.disponibilidade}`);
const estoqueFruta3 = estoque(fruta3)
console.log(`Precisa de reposição de ${fruta3.nome}? ${estoqueFruta3.disponibilidade}`);

// DESAFIOS

//  1.
const perguntas = () =>{
    const objeto = {
    }
    objeto.nome = prompt(`Digite o seu nome:`)
    objeto.profissao = prompt(`Digite sua profissao:`)
    objeto.idade = prompt(`Digite a sua idade:`)
    console.log(objeto)
    console.log(typeof(objeto))
}

//  2.

const filmes = () =>{
    const filme1 = {
        anoDeLancamento: 2022,
        nome: `Doutor Estranho No Multiverso da Loucura`
    }
    const filme2 = {
        anoDeLancamento: 2022,
        nome: `The Batman`
    }
    console.log(`O primeiro filme foi lançado antes do segundo? ${filme1.anoDeLancamento < filme2.anoDeLancamento}`)
    console.log(`o primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoDeLancamento === filme2.anoDeLancamento}`)
}

//  3. Função está no exercício 3 de escrita de código

