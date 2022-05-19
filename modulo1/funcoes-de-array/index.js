/*  EXERCÍCOS DE INTERPRETAÇÃO DE CÓDIGO

1a. Será impresso cada elemento do array, nesse caso cada objeto, em uma linha, seguido do seu indice e depois o array inteiro

2a. ['Amanda Rangel', 'Laís Petra', 'Letícia Chijo']

3a. (2) [{…}, {…}] // Um array com os dois objetos que tem o apelido diferente de Chijo
        0: {nome: 'Amanda Rangel', apelido: 'Mandi'}
        1: {nome: 'Laís Petra', apelido: 'Laura'}
*/

// EXERCÍCIOS DE ESCRITA DE CÓDIGO

//  1.

const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//  a.

const nomePets = pets.map((item, index, array) =>{
    return item.nome
})

console.log(nomePets);

//  b.

const salsichas = pets.filter((item, index, array) =>{
    if(item.raca === `Salsicha`){
        return true
    }
})

console.log(salsichas)

//  c.

const poodles = pets.filter((pets) => { 
    return pets.raca === `Poodle`
}).map(item => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}!`
})

console.log(poodles)

//  2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//  a.

const nomeItem = produtos.map(item =>{
    return item.nome
})

console.log(nomeItem);

//  b.

const nomeProdutos = produtos.map(item =>{
    return {nome: item.nome, preco: (item.preco*0.95).toFixed(2)}
})

console.log(nomeProdutos)

//  c.

const bebidas = produtos.filter(item =>{
    return item.categoria === `Bebidas`    
})

console.log(bebidas)

//  d.

const ype = produtos.filter(item =>{
    return item.nome.includes(`Ypê`) 
})

console.log(ype);

//  e.

const valoresYpe = produtos.filter(item =>{
    return item.nome.includes(`Ypê`) 
}).map(item => {
    return `Compre ${item.nome} por R$ ${item.preco}`
})

console.log(valoresYpe);

// DESAFIOS

//  1.

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//  a.

const nomesPokemon = pokemons.map(item => {
    return item.nome
}).sort()

console.log(nomesPokemon);

//  b.

let tiposPokemon = pokemons.map(item =>{
    return item.tipo
}).sort(function (a, b){
    return a.localeCompare(b)
})
tiposPokemon = [...new Set(tiposPokemon)]

console.log(tiposPokemon);