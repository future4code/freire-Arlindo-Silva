-- Exercicio 1 

-- a) A query cria uma tabela com 5 colunas que não podem ter valores nulos e um deles, o ID, é a Chave Primária.

CREATE TABLE Actor (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    salary FLOAT NOT NULL,
    birth_date DATE NOT NULL,
    gender VARCHAR(6) NOT NULL
);

-- b) SHOW TABLES mostra todas as tabelas do base de dados, SHOW DATABASES mostra todas as bases de dados 

SHOW TABLES;
SHOW DATABASES;

-- c) Aparece uma descrição com todas informações do tipo de variaves de cada coluna, se pode ser nula, qual a primaria e etc.

DESCRIBE Actor;

-- Exercicio 2 
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "001", 
  "Tony Ramos",
  400000,
  "1948-08-25", 
  "male"
);

-- a)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Gloria Pires",
  1200000,
  "1963-08-23", 
  "female"
);

-- b) Entrada duplicada - Deu erro pois ja existe uma linha com esse numero ID

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002", 
  "Maite Perroni",
  3500000,
  "1983-03-09", 
  "female"
);

-- c) Erro acontece por não haver sido passado todos os parametros na chamada da ação INSERT

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "003", 
  "Fernanda Montenegro",
  300000,
  "1929-10-19", 
  "female"
);

-- d) Nome não possui um valor padrao, a variavel name não pode ser nula, sendo assim deve ser passado um valor para a mesma

INSERT INTO Actor (id,name, salary, birth_date, gender)
VALUES(
  "004",
  "Carla Santiago",
  400000,
  "1949-04-18", 
  "male"
);

-- e) Valor da data incorreto, pois a data é uma string e foi passada como numero

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "005", 
  "Juliana Paes",
  719333.33,
  "1979-03-26", 
  "female"
);

-- f)

INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "006", 
  "Maite Perroni",
  3500000,
  "1983-03-09", 
  "female"
);

-- Exercicio 4

SELECT * FROM Actor;

SELECT id, salary from Actor;

SELECT id, name from Actor WHERE gender = "male";

-- a) 

SELECT * from Actor WHERE gender = "female";

-- b)

SELECT salary from Actor WHERE name = "Tony Ramos";

-- c) Não retornou nenhum póis nenhum dos atores ou atrizes do banco possui o genero com o valor invalid

SELECT * from Actor WHERE gender = "invalid";

-- d)

SELECT id, name, salary from Actor WHERE salary <= 500000;

-- e) O erro ocorre pois nao exite coluna chamanda nome e sim name.

SELECT id, nome from Actor WHERE id = "002";
SELECT id, name from Actor WHERE id = "002";

-- Exercicio 4

SELECT * FROM Actor
WHERE (name LIKE "A%" OR name LIKE "J%") AND salary > 300000;

-- a) A query primeiro filtra os atores que tenha o nome iniciado com A ou J e depois filtra apenas os que possuam sálarios maiores que 300000

-- b) 

SELECT * FROM Actor
WHERE name NOT LIKE "A%" AND salary > 350000;

-- c)

SELECT * FROM Actor
WHERE name LIKE "%G%" OR name LIKE "%g%";

-- d) 

SELECT * FROM Actor
WHERE ((name LIKE "%A%" OR name LIKE "%a%") OR (name LIKE "%G%" OR name LIKE "%g%")) AND salary BETWEEN 350000 AND 900000;

-- Exercicio 5

CREATE TABLE Movie (
	id VARCHAR(255) PRIMARY KEY,
    title VARCHAR(255) NOT NULL UNIQUE,
    synop TEXT NOT NULL,
    releaseDate DATE NOT NULL,
    rating INT NOT NULL
);

INSERT INTO Movie (id, title, synop, releaseDate, rating)
VALUES(
	"001",
    "Se Eu Fosse Você",
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos",
    "2006/01/06",
    7
);

INSERT INTO Movie (id, title, synop, releaseDate, rating)
VALUES(
	"002",
    "Doce de Mãe",
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela",
    "2012/12/27",
    10
);

INSERT INTO Movie (id, title, synop, releaseDate, rating)
VALUES(
	"003",
    "Dona Flor e Seus Dois Maridos",
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.",
    "2017/11/02",
    8
);

INSERT INTO Movie (id, title, synop, releaseDate, rating)
VALUES(
	"004",
    "Minha Mãe é Uma Peça",
    "Dona Hermínia é uma mulher de meia idade, divorciada do marido, que a trocou por uma mais jovem. Hiperativa, ela não larga o pé de seus filhos Marcelina e Juliano, que já estão bem grandinhos.",
    "2013/06/21",
    10
);

-- Exercicio 6 

-- a)

SELECT id, title, rating from Movie WHERE id = "002";

-- b) 

SELECT * from Movie WHERE title = "Minha Mãe é uma Peça";

-- c)

SELECT id, title, synop from Movie WHERE rating >= 7;

-- Exercicio 7

-- a)

SELECT * FROM Movie WHERE title LIKE "%vida%";

-- b) TERMO DE BUSCA = mae

SELECT * FROM Movie 
WHERE title LIKE "%mãe%" OR synop LIKE "%mãe%";

-- c)

SELECT * FROM Movie
WHERE releaseDate < CURDATE();

-- d)

SELECT * FROM Movie
WHERE releaseDate < CURDATE() AND 
      (title LIKE "%mae%" OR synop LIKE "%mae%") AND 
      rating > 7;