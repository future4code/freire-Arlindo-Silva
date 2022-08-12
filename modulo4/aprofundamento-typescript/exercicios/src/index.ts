// Exercicio 1

// a) Atribuindo um número a uma variável do tipo string:


let minhaString: string // = 10

// Aparece o seguinte erro: Type 'number' is not assignable to type 'string'.ts(2322)
// Isso porque o ts não aceita que uma variável declarada com string receba um valor de outro tipo

// b) Para que a variável do tipo numer tambem aceite o tipo string temos que declara-la com Union Type

let meuNumero: number | string = "Ola"

// c) Criando 3 variaveis usando type Aliases

type person = { nome: string, idade: number, corFavorita: string }

enum Cores {
  RED = "Vermelho",
  ORANGE = "Laranja",
  YELLOW = "Amarelo",
  GREEN = "Verde",
  BLUE = "Azul",
  INDIGO = "Índigo",
  VIOLET = "Violeta"
}

const pessoa1: person = {
  nome: "Vini",
  idade: 23,
  corFavorita: Cores.RED
}

const pessoa2: person = {
  nome: "Rony",
  idade: 20,
  corFavorita: Cores.VIOLET
}

const pessoa3: person = {
  nome: "Perroni",
  idade: 21,
  corFavorita: Cores.BLUE
}

// Exercicio 2

function obterEstatisticas(numeros: number[]): { maior: number, menor: number, media: number } {

  const numerosOrdenados: number[] = numeros.sort(
    (a, b) => a - b
  )

  let soma: number = 0

  for (let num of numeros) {
    soma += num
  }

  const estatisticas: { maior: number, menor: number, media: number } = {
    maior: numerosOrdenados[numeros.length - 1],
    menor: numerosOrdenados[0],
    media: soma / numeros.length
  }

  return estatisticas
}

type amostra = {
  numeros: number[],
  obterEstatisticas: { maior: number; menor: number; media: number; },
}

// Exercicio 3

type post = {
  autor: string,
  texto: string
}

const posts: post[] = [
  {
    autor: "Alvo Dumbledore",
    texto: "Não vale a pena viver sonhando e se esquecer de viver"
  },
  {
    autor: "Severo Snape",
    texto: "Menos 10 pontos para Grifinória!"
  },
  {
    autor: "Hermione Granger",
    texto: "É levi-ô-sa, não levio-sá!"
  },
  {
    autor: "Dobby",
    texto: "Dobby é um elfo livre!"
  },
  {
    autor: "Lord Voldemort",
    texto: "Avada Kedavra!"
  }
]

function buscarPostsPorAutor(posts: post[], autorInformado: string) {
  return posts.filter(
    (post) => {
      return post.autor === autorInformado
    }
  )
}

// Exercicio 4 ../../exercicio-4

// Exercicio 5

// a) É um arquivo muito maior e com muitos parametros, a maioria comentado.

// Desafios

// Exercicio 6

type consulta = {
  nome: string,
  idade: number,
  dataDaConsulta: string
  localeCompare?: any;
}

const consultas: consulta[] = [
  { nome: "João", idade: 23, dataDaConsulta: "01/10/2021" },
  { nome: "Pedro", idade: 31, dataDaConsulta: "02/07/2021" },
  { nome: "Paula", idade: 26, dataDaConsulta: "03/11/2021" },
  { nome: "Márcia", idade: 45, dataDaConsulta: "04/05/2021" }
]

function ordenaConsultas(consultas: consulta[]) {
  return consultas.sort(function (a, b) {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  });
}

console.log(ordenaConsultas(consultas));

// Exercicio 6

enum AnoHistorico{
  PRE = 100000,
  ANT = 4000,
  MED = 476,
  MOD = 1453,
  CON = 1789
}

enum Parametro{
  AC = "AC",
  DC = "DC"
}

function anoHistorico() {
  const year:number = AnoHistorico.PRE
  const param: string = Parametro.AC

  if (param === "DC" || param === "") {
    switch (year) {
      case 476:
        console.log('Idade Média');        
        break;    
      case 1453:
        console.log('Idade Moderna');
        break;
      case 1789:
        console.log('Idade Contemporânea');       
        break;     
      default:
        console.log('Essa data não está nos registros');               
        break;
    }  
  }else if (param === "AC") {
    switch (year) {
      case 100000:
        console.log('Pré-história');
        break;
      case 4000:
        console.log('Idade Antiga');        
        break;
      default:
        console.log('Essa data AC não está nos registros');
        break;
    }
  }else{
    console.log("Parametro incorreto! (AC ou DC)");
    
  }
}

anoHistorico()

// Exercicio 7

type product = {
  nome: string,
  preco: number,
  classificacao: string
  precoBlack?: number
}

const produtos: product[] = [
  {
    nome: "Short",
    preco: 150,
    classificacao: "verao"  
  },
  {
    nome: "Casaco",
    preco: 140,
    classificacao: "inverno"  
  },
  {
    nome: "Sunga",
    preco: 100,
    classificacao: "banho"  
  },
  {
    nome: "Cueca",
    preco: 40,
    classificacao: "intimas"  
  }
]

function blackPrices (produtos: product[]): product[]{
  return produtos.map((produto) => {
    switch (produto.classificacao) {
      case "verao":
        return {...produto, precoBlack: produto.preco * 0.95}  
      case "inverno":
        return {...produto, precoBlack: produto.preco * 0.90}  
      case "banho":
        return {...produto, precoBlack: produto.preco * 0.96}  
      case "intimas":
        return {...produto, precoBlack: produto.preco * 0.93}  
      default:
        return produto
    }
  })
}

console.table(blackPrices(produtos));

// Exercicio 8

type prato = {
  nome: string,
  custo: number,
  valor: number,
  ingredientes: string[]
}

let pratos: prato[] = [
  {
    nome: "Lasanha",
    custo: 20,
    valor: 30,
    ingredientes: ["tomate", "massa", "carne"]
  }
]

function adddPrato (prato: prato) {
  pratos = [...pratos, prato]
}

const prato2: prato = {
  nome: "Pizza",
  custo: 50,
  valor: 80,
  ingredientes: ["tomate", "massa", "presunto", "queijo"]
}

adddPrato(prato2)

function consultaPreco (produto: string): number{
  let preco: number = 0
  for (const item of pratos) {
    if (item.nome === produto) {
      preco = item.valor
    }
  }
  return preco
}

console.log(`O preço do item é R$ ${consultaPreco("Lasanha")}.`);

let vendas: prato[] = [
  {
    nome: "Pizza",
    custo: 50,
    valor: 80,
    ingredientes: ["tomate", "massa", "presunto", "queijo"]
  },
  {
    nome: "Pizza",
    custo: 50,
    valor: 80,
    ingredientes: ["tomate", "massa", "presunto", "queijo"]
  },
  {
    nome: "Lasanha",
    custo: 20,
    valor: 30,
    ingredientes: ["tomate", "massa", "carne"]
  },
  {
    nome: "Lasanha",
    custo: 20,
    valor: 30,
    ingredientes: ["tomate", "massa", "carne"]
  }
]

function adddVenda (prato: prato) {
  vendas = [...vendas, prato]
}

adddVenda(pratos[0])

let lucroTotal: number = 0

function calcularLucro () {
  for (const venda of vendas) {
    const lucro: number = venda.valor - venda.custo
    lucroTotal = lucroTotal + lucro
  }
}

calcularLucro()

console.log(`O lucro da loja é: R$ ${lucroTotal}`);
