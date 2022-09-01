-- Exercicio 1

CREATE TABLE Rating (
	id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
	rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id)
);

-- a) Uma chava estrangeira é uma chave que pertence a outra tabela

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "001", 
  "Ameeeeei",
  10,
  "001"
);

SELECT * FROM Rating;
SELECT * FROM MovieCast;
SELECT * FROM Movie;
SELECT * FROM Actor;

-- b)

INSERT INTO Rating (id, comment, rate, movie_id)
VALUES(
  "002", 
  "Ameeeeei",
  10,
  "500"
);

-- Error Code: 1452. Cannot add or update a child row: 
-- a foreign key constraint fails (`freire-arlindo-silva`.`Rating`, 
-- CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) 
-- REFERENCES `Movie` (`id`))

-- O erro se dá pq a Query não encontra essa id na tabela Movie

-- d) 

ALTER TABLE Movie DROP COLUMN rating;

-- e) 

DELETE FROM Movie WHERE id = "001";

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-arlindo-silva`.`Rating`, CONSTRAINT `Rating_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))

-- O erro se dá pq não pode apagar a referencia de uma outra tabela

-- Exercicio 2

CREATE TABLE MovieCast (
	movie_id VARCHAR(255),
	actor_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id),
    FOREIGN KEY (actor_id) REFERENCES Actor(id)
);

-- a) Essa tabela possui duas colunas e ambas são chaves estrangeiras
-- significa que cada linha dessa tabela terá a id de um filme e a id
-- de um ator ou atriz

-- b)

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "002"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "001"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "005"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "006"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"001",
    "015"
);

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"003",
    "001"
);

-- c)

INSERT INTO MovieCast (movie_id, actor_id)
VALUES(
	"010",
    "040"
);

-- Error Code: 1452. Cannot add or update a child row: a foreign key constraint fails (`freire-arlindo-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_1` FOREIGN KEY (`movie_id`) REFERENCES `Movie` (`id`))
-- Ocorre um erro pois a Query precisa que as id passadas façam referencia as id ja existentes nas colunas Actor e Movie

-- d) 

DELETE FROM Actor WHERE id = "001";

-- Error Code: 1451. Cannot delete or update a parent row: a foreign key constraint fails (`freire-arlindo-silva`.`MovieCast`, CONSTRAINT `MovieCast_ibfk_2` FOREIGN KEY (`actor_id`) REFERENCES `Actor` (`id`))
-- O erro se dá pq não pode apagar a referencia de uma outra tabela

-- Exercicio 3

SELECT * FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- a) É tipo quando ou se

-- b)

SELECT title, Movie.id, rate FROM Movie
INNER JOIN Rating ON Movie.id = Rating.movie_id;

-- Exercicio 4

-- a)

SELECT title, Movie.id, rate, comment FROM Movie
LEFT JOIN Rating ON Movie.id = Rating.movie_id;

-- b) 

SELECT movie_id, title, actor_id FROM Movie
RIGHT JOIN MovieCast ON MovieCast.movie_id = Movie.id;

SELECT m.id, m.title, mc.actor_id FROM Movie m
RIGHT JOIN MovieCast mc ON mc.movie_id = m.id;

-- c) 

SELECT Movie.id, title, AVG(Rating.rate) FROM Movie 
LEFT JOIN Rating ON Movie.id = Rating.movie_id
GROUP BY Movie.id;

-- Exercicio 5 

SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- a) Porque estamos juntando informacoes de 3 tabelas diferentes

-- b)
 
SELECT m.id as movie_id, m.title, a.name, a.id as actor_id FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- c)  

SELECT m.id as movie_id, m,title, a.id as actor_id, a.name FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id;

-- Error Code: 1054. Unknown column 'm' in 'field list'
-- tem uma virgula no lugar de um ponto

-- d) 

SELECT * FROM Movie m
LEFT JOIN MovieCast mc ON m.id = mc.movie_id
JOIN Actor a ON a.id = mc.actor_id
LEFT JOIN Rating r ON r.movie_id = m.id;