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

console.log(`Boas vindas ao jogo de Blackjack`);

if(confirm(`Quer iniciar uma nova rodada?`)){
   const cartaUsuario1 = comprarCarta()
   const cartaUsuario2 = comprarCarta()
   const cartaComputador1 = comprarCarta()
   const cartaComputador2 = comprarCarta()
   console.log(`Usuário - cartas: ${cartaUsuario1.texto} ${cartaUsuario2.texto} - pontuação ${cartaUsuario1.valor + cartaUsuario2.valor}`);
   console.log(`Computador - cartas: ${cartaComputador1.texto} ${cartaComputador2.texto} - pontuação ${cartaComputador1.valor + cartaComputador2.valor}`);
   if(cartaUsuario1.valor + cartaUsuario2.valor > cartaComputador1.valor + cartaComputador2.valor){
      console.log(`Usuário venceu!`);
   }else if (cartaUsuario1.valor + cartaUsuario2.valor < cartaComputador1.valor + cartaComputador2.valor) {
      console.log((`Computador venceu!`));
   }else{
      console.log(`O jogo empatou!`);
   }
}else {
   console.log(`O jogo acabou!`);
}

