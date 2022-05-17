// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const altura = Number(prompt(`Digite a altura do retangulo:`))
  const largura = Number(prompt(`Digite a largura do retangulo:`))
  console.log(altura * largura);
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt(`Em que ano estamos?`))
  const anoNascimento = Number(prompt(`Em que ano você nasceu?`))
  console.log(anoAtual - anoNascimento);
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt(`Digite o seu nome:`)
  const idade = prompt(`Digite sua idade`) 
  const email = prompt(`Digite o seu email:`)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  let array = []
  array [0] = prompt(`Digite sua primeira cor favorita:`)
  array [1] = prompt(`Digite sua segunda cor favorita:`)
  array [2] = prompt(`Digite sua terceira cor favorita:`)
  console.log(array)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
     return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  string1 = string1.length
  string2 = string2.length
  return string1 === string2
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0] 
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  let x = array[array.length - 1]
  array[array.length -1] = array[0]
  array[0] = x  
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  string1 = string1.toUpperCase()
  string2 = string2.toUpperCase()
  return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt(`Digite o ano atual:`))
  const anoNascimento = Number(prompt(`Digite o ano de nascimento:`))
  const anoEmissao = Number(prompt(`Digite o ano em que a carteira de identidade foi emitida:`))
  const idade = anoAtual - anoNascimento
  const tempo = anoAtual - anoEmissao 

  console.log((idade <= 20 && tempo >=5) || (idade > 20 && idade <= 50 && tempo >= 10) || (idade > 50 && tempo >= 15));

  // || outro modo
  
  // let renova
  // if(idade <= 20){
  //   tempo = anoAtual - anoEmissao 
  //   renova = tempo >= 5
  // }
  // if(idade > 20 && idade <= 50){
  //   tempo = anoAtual - anoEmissao 
  //   renova = tempo >= 10
  // }
  // if(idade > 50){
  //   tempo = anoAtual - anoEmissao 
  //   renova = tempo >= 15
  // }
  // console.log(renova)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
return ano % 400 === 0 || (ano % 4 === 0 && ano % 100 != 0)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const maiorIdade = prompt(`Você tem mais de 18 anos? (responda com sim ou nao)`)
  const ensinoMedio = prompt(`Você possui ensino médio completo? (responda com sim ou nao)`)
  const disponibilidade = prompt(`Você tem disponibilidade exclusiva nos horários do curso? (responda com sim ou nao)`)
  console.log(maiorIdade === `sim` && ensinoMedio === `sim` && disponibilidade === `sim`);
}