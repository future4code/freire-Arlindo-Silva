// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let arrayInvertido = []
    for (let i = 1; i <= array.length; i++) {
        arrayInvertido[i - 1] = array[array.length - i]   
    }
    return arrayInvertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b){
        return a - b
    })
    // for (let i = 0; i < array.length; i++) {
    //     for (let j = 0; j < (array.length - i - 1); j++) {
    //         if(array[j] > array[j+1]){
    //             let x = array[j]
    //             array[j] = array[j+1]
    //             array[j + 1] = x
    //         }
    //     }        
    // }
    // return array
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return arrayPares = array.filter(item =>{
        return item % 2 === 0
    })
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return arrayPares = array.filter(item =>{
        return item % 2 === 0
    }).map(item =>{
        return item * item
    })
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = -Infinity
    for (const numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    return maiorNumero  
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    if (num1 > num2) {
        return{
            maiorNumero: num1,
            maiorDivisivelPorMenor: num1 % num2 === 0,
            diferenca: num1 - num2
        }
    } else {
        return{
            maiorNumero: num2,
            maiorDivisivelPorMenor: num2 % num1 === 0,
            diferenca: num2 - num1
        }
    }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPares = []
    for (let i = 0; i < n; i++) {
        numerosPares[i] = i * 2
    }
    return numerosPares   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return `Equilátero`
    }else if ((ladoA === ladoB && ladoB !== ladoC) || (ladoA === ladoC && ladoC !== ladoB) || (ladoB === ladoC && ladoC !== ladoA)) {
        return 'Isósceles'        
    }else if (ladoA !== ladoB && ladoB !== ladoC) {
        return `Escaleno`
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function (a, b){
        return a - b
    })
    let arraySegundoMaiorMenor = []
    arraySegundoMaiorMenor[0] = array[array.length - 2]    
    arraySegundoMaiorMenor[1] = array[1]

    return arraySegundoMaiorMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(`, `)}.`    
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    pessoa = {...pessoa, nome: `ANÔNIMO`}
    return pessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    return pessoas.filter(item =>{
        return item.idade > 14 && item.idade < 60 && item.altura >= 1.5
    })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(item =>{
        return item.idade <= 14 || item.idade >= 60 || item.altura < 1.5
    })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}