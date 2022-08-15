// Exercicio 4

// b) npx tsc  exercicio-4.ts
// c) npx tsc ./src/exercicio-4.ts
// d) npx tsc ./src/exercicio-4.ts ./src/teste.ts ou npx tsc

type pokemona = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemona1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemona2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemona3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1);
