// Exercicio 4

// b) npx tsc  exercicio-4.ts
// c) npx tsc ./src/exercicio-4.ts
// d) npx tsc ./src/exercicio-4.ts ./src/teste.ts

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

console.log(pokemon1);
