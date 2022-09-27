describe("Exercicio de testes", () => {
  test("Testando se número é par", () => {
    expect(isEven(10)).toBe(true);
  });

  test("Testando se está em caixa alta", () => {
    const palavra = "casaco";
    expect(toUpperCase(palavra)).toBe("CASACO");
  });

  test("Testando se a palavra foi quebrada em um array de caracteres", () => {
    const palavra = "casaco";

    expect(splitString(palavra)).toEqual(["c", "a", "s", "a", "c", "o"]);
  });

  test("Testando se o numero esta sendo convertido de string para number", () => {
    const number = "10";
    const result = toNumber(number);
    expect(typeof result === "number").toBe(true);
  });

  test("Testando se a funcao está retornando a quantidade de caracteres de uma string", () => {
    const string = "ola";

    expect(stringLength(string)).toBe(3);
  });

  test("Testando se a função está sorteando um numero de 1 a 10", () => {
    const number = randomNumberBetween1And10();

    expect(number).toBeGreaterThan(0);
    expect(number).toBeLessThan(11);
  });

  test("Verificando se o astrodev está na lista de usuários", () => {
    expect(users).toContainEqual({ id: "1", name: "Astrodev" });
  });

  test("Verificando se está retornando a média correta", () => {
    const numbers: number[] = [2, 8, 16, 4];
    expect(average(numbers)).toBe(8);
  });

  test("Verificando se está retornando a idade correta", () => {
    const year: number = 1999;
    expect(age(year)).toBe(23);
  });

  test("Verificando se está formatando a data", () => {
    const date: string = "2022/09/26";
    expect(formatDate(date)).toBe("26/09/2022");
  });
});

interface User {
  id: string;
  name: string;
}

const users: User[] = [
  {
    id: "1",
    name: "Astrodev",
  },
  {
    id: "2",
    name: "Vinicius",
  },
];

const isEven = (number: number) => {
  return number % 2 == 0;
};

const toUpperCase = (word: string) => {
  return word.toUpperCase();
};

const splitString = (string: string): string[] => {
  return string.split("");
};

const toNumber = (string: string): number | null => {
  const number = Number(string);
  if (isNaN(number)) {
    return null;
  } else {
    return Number(number);
  }
};

const stringLength = (string: string): number => {
  return string.length;
};

const randomNumberBetween1And10 = (): number => {
  const min = 1;
  const max = 10;
  const result = Math.floor(Math.random() * (max - min + 1)) + min;

  return result;
};

const average = (numbers: number[]): number => {
  let totalSum = 0;

  for (let number of numbers) {
    totalSum += number;
  }

  const average = Math.ceil(totalSum / numbers.length);

  return average;
};

const age = (year: number): number => {
  const currentYear = new Date().getFullYear();
  return currentYear - year;
};

const formatDate = (initialDate: string): string => {
  const date = new Date(initialDate);
  const formattedDate = date.toLocaleDateString();
  console.log(formattedDate);

  return formattedDate;
};
