// // Exercicio 1

// function checaTriangulo (a: number, b: number, c: number): string{
//     if (a !== b && b !== c) {
//         return "Escaleno";
//     }else if (a === b && b === c) {
//         return "Equilátero";
//       } else {
//         return "Isósceles";
//       }
// }

// const resultado: string = checaTriangulo(1, 1, 1)

// console.log(resultado);

// // Exercicio 2

// // Recebendo as cores diretamente no codigo
// const cor1: string = "Vermelho"
// const cor2: string = "Preto"
// const cor3: string = "Branco"

// // Recebendo as cores via process.argv[]

// // const cor1: string = process.argv[2]
// // const cor2: string = process.argv[3]
// // const cor3: string = process.argv[4]

// const cores: string[] = [cor1, cor2, cor3]

// console.log(cores)

// // Exercicio 3

// function checaAnoBissexto (ano: number) :boolean {
//    const cond1: boolean = ano % 400 === 0
//    const cond2: boolean = (ano % 4 === 0) && (ano % 100 !== 0)
//    return cond1 || cond2
// }

// // Recebendo o ano via process.argv[2]
// // const ano: number = Number(process.argv[2])
// // const bissexto: boolean = checaAnoBissexto(ano)

// // Recebendo o ano diretamente na chamada da função
// const bissexto: boolean = checaAnoBissexto(2020)

// if (bissexto) {
//     console.log(`O ano é bissexto`);    
// }else{
//     console.log(`O ano não é bissexto`);
// }

// // Exercicio 4

// function comparaDoisNumeros(num1: number, num2: number) :number{
//     let maiorNumero: number 
//     let menorNumero: number

//     if (num1 > num2) {
//         maiorNumero = num1;
//         menorNumero = num2;
//     } else {
//         maiorNumero = num2;
//         menorNumero = num1;
//     }

//     const diferenca: number = maiorNumero - menorNumero

//     return diferenca
// }

// const diferenca: number = comparaDoisNumeros(30,5)
// console.log(diferenca);

// // Exercicio 5

// function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number) : string{
//     let idade: number = anoAtual - anoNascimento
//     let tempoCarteira: number = anoAtual - anoEmissao
   
//      if(idade <= 20 ) {
//          return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
       
//       }else if(idade >= 20 || idade <= 50) {
//          return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
       
//       }else if(idade > 50) {
//          return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
       
//        }else {
//            return "error"
//        }
//    }

// const resposta: string = checaRenovacaoRG(2022, 1980, 2000)

// console.log(resposta);

// // DESAFIOS

// // Exercicio 6

// function operaNumeros (num1: number, num2: number): void {
//     console.log(`A soma dos números é igual a: ${num1 + num2}`)
//     console.log(`A subtração dos números é igual a: ${num1 - num2}`)
//     console.log(`A multiplicação dos números é igual a: ${num1 * num2}`)
//     if (num1 > num2) {
//         console.log(`O maior número é: ${num1}`);            
//     }else if (num2 > num1) {
//         console.log(`O maior número é: ${num2}`);    
//     }else if (num1 === num2) {
//         console.log(`Os números são iguais`);
//     }
// }

// operaNumeros(10, 5)

// Exercicio 7

// function trancreverDNA (dna: string): string{
//     let rna: string = ""
//     for (let index = 0; index < dna.length; index++) {
//         switch (dna[index]) {
//             case 'A':
//                 rna = rna + 'U'
//                 break;
//             case 'T':
//                 rna = rna + 'A'
//                 break;
//             case 'C':
//                 rna = rna + 'G'
//                 break;
//             case 'G':
//                 rna = rna + 'C'
//                 break;
//             default:
//                 rna = rna + 'y'
//                 break;
//         }
        
//     }
//     return rna
// }

// const rna: string = trancreverDNA("ATTGCTGCGCATTAACGACGCGTA")

// console.log(rna);

// // Exercicio 8

// function reverter (frase: string): string{
//     let reversa: string = ""
//     for (let index = 0; index < frase.length; index++) {
//         reversa = reversa + frase[frase.length - (1 + index)]
//     }
//     return reversa
// }

// console.log(reverter('maravilhoso'));

// // Exercicio 9

// function validaInscricao (idade: number, nivelMedio: boolean, horas: number, turno: string): boolean{
//     let validacao: boolean
//     if (idade >= 18 && nivelMedio) {
//         switch (turno) {
//             case 'integral':
//                 if (horas >= 40) {
//                     validacao = true 
//                 }else{
//                     validacao = false 
//                 }
//                 break;
//             case 'noturno':
//                 if (horas >= 20) {
//                     validacao = true 
//                 }else{
//                     validacao = false 
//                 }
//                 break;
//             default:
//                 console.log('Digite o turno corretamente: noturno ou integral');
//                 validacao = false 
//                 break;
//         }
//     }else{
//         validacao = false
//     }
//     return validacao
// }

// const validacao = validaInscricao(20, true, 40, 'integral')

// if (validacao) {
//     console.log('Inscrição aceita');    
// } else {
//     console.log('Inscrição negada');    
// }