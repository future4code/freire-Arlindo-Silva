/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert(`Boas vindas ao jogo de Blackjack`);

let cartasUsuario = [], cartasComputador = [], somaUsuario, somaComputador, c = 2, u = 2


if(confirm(`Quer iniciar uma nova rodada?`)){
   cartasUsuario[0] = comprarCarta(), cartasUsuario[1] = comprarCarta()
   cartasComputador[0] = comprarCarta(), cartasComputador[1] = comprarCarta()

   while (cartasUsuario[0].texto.includes(`A`) && cartasUsuario[1].texto.includes(`A`)) {
      cartasUsuario[0] = comprarCarta()
      cartasUsuario[1] = comprarCarta()
   }

   somaUsuario = cartasUsuario[0].valor + cartasUsuario[1].valor

   while (cartasComputador[0].texto.includes(`A`) === cartasComputador[1].texto.includes(`A`)) {
      cartasComputador[0] = comprarCarta()
      cartasComputador[1] = comprarCarta()
   }

   somaComputador = cartasComputador[0].valor + cartasComputador[1].valor

   cartasUsuarioTexto = cartasUsuario.map(item =>{
      return item.texto
   }).join().replaceAll(`,`, ` `)

   cartasComputadorTexto = cartasComputador.map(item =>{
      return item.texto
   }).join().replaceAll(`,`, ` `)   

   let cavaCarta = confirm(`Suas cartas são ${cartasUsuarioTexto}. A carta revelada do computador é ${cartasComputador[0].texto}\nDeseja comprar mais uma carta?`)

   if (cavaCarta === true) {
      for (let i = 2; cavaCarta === true && somaUsuario < 21; i++) {
         cartasUsuario[i] = comprarCarta()
         somaUsuario = somaUsuario + cartasUsuario[i].valor
         cartasUsuarioTexto = `${cartasUsuarioTexto} ${cartasUsuario[i].texto}`
         cavaCarta = confirm(`Suas cartas são ${cartasUsuarioTexto}. A carta revelada do computador é ${cartasComputador[0].texto}\nDeseja comprar mais uma carta?`)
      }
   }

   if (somaUsuario <= 21) {
      for (let i = 2; somaComputador <= somaUsuario; i++) {
         cartasComputador[i] = comprarCarta()
         somaComputador = somaComputador + cartasComputador[i].valor
         cartasComputadorTexto = `${cartasComputadorTexto} ${cartasComputador[i].texto}`
         
      }
   }

   if(somaUsuario <= 21 && somaUsuario > somaComputador){
      alert(`
Suas cartas são: ${cartasUsuarioTexto}. Sua pontuação é ${somaUsuario}.
As cartas do computador são ${cartasComputadorTexto}. A pontuação do computador é ${somaComputador}.
O usuário ganhou!`)
   }else if (somaUsuario <= 21 && somaComputador > 21) {
      alert(`
Suas cartas são: ${cartasUsuarioTexto}. Sua pontuação é ${somaUsuario}.
As cartas do computador são ${cartasComputadorTexto}. A pontuaçã do computador é ${somaComputador}.
O usuário ganhou!`)
   }else if (somaUsuario > 21) {
      alert(`
Suas cartas são: ${cartasUsuarioTexto}. Sua pontuação é ${somaUsuario}.
As cartas do computador são ${cartasComputadorTexto}. A pontuaçã do computador é ${somaComputador}.
O computador ganhou!`)
   }else if(somaComputador === somaUsuario){
   alert(`
Suas cartas são: ${cartasUsuarioTexto}. Sua pontuação é ${somaUsuario}.
As cartas do computador são ${cartasComputadorTexto}. A pontuaçã do computador é ${somaComputador}.
O jogo empatou!`)
   }else{
      if(somaUsuario > somaComputador){
   alert(`
Suas cartas são: ${cartasUsuarioTexto}. Sua pontuação é ${somaUsuario}.
As cartas do computador são ${cartasComputadorTexto}. A pontuaçã do computador é ${somaComputador}.
O usuário ganhou!`)
      }else{
      alert(`
Suas cartas são: ${cartasUsuarioTexto}. Sua pontuação é ${somaUsuario}.
As cartas do computador são ${cartasComputadorTexto}. A pontuaçã do computador é ${somaComputador}.
O computador ganhou!`)        
      }
   }
}else {
   alert(`O jogo acabou!`);
}
    
    