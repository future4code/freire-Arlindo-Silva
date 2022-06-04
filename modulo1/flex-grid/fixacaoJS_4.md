'''
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
    let a = 0
    let frase
    for (const numero of arrayDeNumeros) {
        if(numero === numeroEscolhido){
          a++
        }  
    }
    if(a > 0){
        frase = `O número ${numeroEscolhido} aparece ${a}x`
    }else{
        frase = `Número não encontrado`    
    }
    return frase
}
'''