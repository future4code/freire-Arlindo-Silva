// Exercico 2 + desafio

let red, blue, reset;
red   = '\u001b[31m';
blue  = '\u001b[34m';
reset = '\u001b[0m';


let resultado

switch (process.argv.length) {
    case 5:
        switch (process.argv[2]) {
            case "add":
                resultado = Number(process.argv[3]) + Number(process.argv[4])
                break;
            case "sub":
                resultado = Number(process.argv[3]) - Number(process.argv[4])
                break;
            case "mult":
                resultado = Number(process.argv[3]) * Number(process.argv[4])
                break;
            case "div":
                resultado = Number(process.argv[3]) / Number(process.argv[4])
                break;    
            default:
                resultado = null
                break;
        }
        console.log(`${blue} Resposta: ${resultado}`);
        break;
    case 2:
        console.log(red +"Esperava 3 parâmetros não recebi nenhum.");
        break;
    case 3:
        console.log(red +"Esperava 3 parâmetros recebi 1.");
        break;
    case 4:
        console.log(red +"Esperava 3 parâmetros recebi 2.");
        break;   
    default:
        console.log(red +"Esperava apenas 3 parâmetros e recebi mais de 3")
        break;
    }
    



