// Exercicio 1

// a) Atribuindo um número a uma variável do tipo string:


let minhaString: string // = 10

// Aparece o seguinte erro: Type 'number' is not assignable to type 'string'.ts(2322)
// Isso porque o ts não aceita que uma variável declarada com string receba um valor de outro tipo

// b) Para que a variável do tipo numer tambem aceite o tipo string temos que declara-la com Union Type

let meuNumero: number | string = "Ola"

// c) Criando 3 variaveis usando type Aliases

type person = {nome: string, idade: number, corFavorita: string} 

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

function obterEstatisticas(numeros: number[]): {maior: number, menor: number, media: number} {

    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: {maior: number, menor: number, media: number} = {
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
  return consultas.sort(function(a,b) {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
});
}

console.log(ordenaConsultas(consultas));
