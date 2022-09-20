import app from "./app"
import {Carro} from "./Carro"

console.log("Classes [Freire]")

const carro1:Carro = new Carro
            ("Azul",
            "Uno",2)

console.table(carro1)

console.log(carro1.getCor())

carro1.setCor("Preto fosco")

console.table(carro1)

const corDoCarrinho = carro1.getCor()

const carro2:Carro = new Carro("Amarelo","Camaro",40)

throw new Error("Deu errado")
//console.table(carro2)
//carro1.modelo = "Fusca"

// //console.table(carro1)

// carro1.acelerar()
// carro1.acelerar()
// carro1.acelerar()
// carro1.acelerar()

// console.table(carro1)

// carro1.abastecer(5)

// console.table(carro1)


// console.table(carro2)

// carro2.acelerar()
// console.table(carro2)

