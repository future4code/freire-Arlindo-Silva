// // Lista TypeScript

// // Exercicio 1

// function exercicio1 (nome: string, data: string) {
//     const dataSplit: string[] = data.split("/")
//     console.log(`Olá me chamo ${nome}, nasci no dia ${dataSplit[0]} do mês ${dataSplit[1]} do ano de ${dataSplit[2]}`); 
// }

// exercicio1("Vini", "19/06/1999")

// // Exercicio 2

// function exercicio2 (variavel: any) {
//     console.log(typeof(variavel));    
// }

// exercicio2('Teste')
// exercicio2(10)
// exercicio2(true)

// // Exercicio 3

// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }

// type filme = {
//     nome: string,
//     ano: number,
//     genero: GENERO,
//     pontuacao?: number
// }

// function exercicio3 (nome: string, ano: number, GENERO: any, pontuacao?: number) {
//     if (pontuacao) {
//         const filme: filme = {
//             nome: nome,
//             ano: ano,
//             genero: GENERO,
//             pontuacao: pontuacao
//         }
//         return filme    
//     }else{
//         const filme: filme = {
//             nome: nome,
//             ano: ano,
//             genero: GENERO,
//         }
//         return filme    
//     }
// }


// const aladim = exercicio3("Aladim", 2019, GENERO.ROMANCE, 1000)

// const scream = exercicio3("Scream", 2010, GENERO.TERROR)

// console.log(aladim);
// console.log(scream);

// // Exercicio 4

// enum SETOR {
//     MARKET = "marketing",
//     VENDAS = "vendas",
//     FINANC = "financeiro",
// }

// type colaborator = {
//     nome: string, 
//     salário: number, 
//     setor: SETOR, 
//     presencial: boolean
// }

// const colaborators: colaborator[] =[
// 	{ nome: "Marcos", salário: 2500, setor: SETOR.MARKET, presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: SETOR.VENDAS, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: SETOR.FINANC, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: SETOR.MARKET, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: SETOR.FINANC, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: SETOR.VENDAS, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: SETOR.MARKET, presencial: true }
// ]

// // Funçao que retorna apenas as pessoas do setor de marketing que trabalham presencialmente. 
// function exercicio4 (colaborators: colaborator[]): colaborator[]{
//     return colaborators.filter(colaborator => {
//         return colaborator.presencial && colaborator.setor === "marketing"
//     })
// }

// console.log(exercicio4(colaborators));

// // Exercicio 5

// type user = {
//     name: string, 
//     email: string, 
//     role: "user" | "admin"
// }

// const users: user[] =[
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

// function exercicio5 (users: user[]): string[]{
//     return users.filter(user => {
//         return user.role === "admin"
//     }).map(user => {
//         return user.email
//     })
// }

// console.log(exercicio5(users));

// // Exercicio 6

// type cliente = {
//     cliente: string, 
//     saldoTotal: number, 
//     debitos: number[]
// }

// const clientes: cliente[] = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// function exercicio6 (clientes: cliente[]): cliente[] {
//     return clientes.map(cliente => {
//         let debitos: number = 0
//         for (const debito of cliente.debitos) {
//             debitos = debitos + debito
//         }
//         return {
//             ...cliente, 
//             saldoTotal: cliente.saldoTotal - debitos,
//             debitos: []
//         }
//     }).filter(cliente => {
//         return cliente.saldoTotal < 0
//     })
// }

// const clienteNegativados: cliente[] = exercicio6(clientes)

// console.log(clienteNegativados);

// Exercicio 7

type item = {
    nome: string, 
    quantidade: number, 
    valorUnitario: any
}

const items: item[] = [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const ajustaPreco = (preco :number): string => {
	const valorAjustado: string = preco.toFixed(2).replace('.', ',')
	return valorAjustado
}

const exercicio7 = (items: item[]): item[] => {
    return items.map(item => {
        return{
            ...item,
            valorUnitario: ajustaPreco(item.valorUnitario)
        }
    }).sort(function (a, b) {
        return a.quantidade - b.quantidade
    })
}

console.log(exercicio7(items));

// Exercicio 8


const exercicio8 = (nascimento: string, emissao: string): boolean => {
    const params: string[] = nascimento.split("/")
    const params2: string[] = emissao.split("/")
    const dataAtual = new Date()
    const dataEmiss = new Date(`${params2[2]}/${params2[1]}/${params2[0]}`)
    const dataNasci = new Date(`${params[2]}/${params[1]}/${params[0]}`)
    const diff = dataAtual.getTime() - dataNasci.getTime()
    const diff2 = dataAtual.getTime() - dataEmiss.getTime()
    const idade = Number((diff / (1000 * 60 * 60 * 24 * 365)).toFixed())
    const anos = Number((diff2 / (1000 * 60 * 60 * 24 * 365)).toFixed())
    console.log(idade, anos);
    
    if (idade <= 20) {
        if (anos <= 5) {
            return false
        }else{
            return true
        }
    }else if (idade > 20 && idade <= 50) {
        if (anos <= 10) {
            return false
        } else {
            return true
        }
    }else{
        if (anos <= 15) {
            return false
        } else {
            return true
        }
    }    
}

if(exercicio8("19/06/1999", "20/05/2005")){
    console.log("Precisa renovar");    
}

// Exercicio 9



