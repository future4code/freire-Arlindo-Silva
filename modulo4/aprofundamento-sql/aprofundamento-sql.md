-- Exercicio 1

ALTER TABLE Actor ADD favorite_ice_cream_flavor VARCHAR(255);

ALTER TABLE Actor ADD type VARCHAR(255) DEFAULT "NotDirector";

-- a) Deletar a coluna salario

-- b) Mudar o nome da coluna genero para sexo

-- c) Mudar a quantidade de caracteres da coluna gender de 6 para 255

-- d)

ALTER TABLE Actor CHANGE gender gender VARCHAR(100);

-- Exercicio 2

-- a)

UPDATE Actor
SET name = "Larissa", birth_date = "2015/05/14"
WHERE id = "003";

-- b)

UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes";

UPDATE Actor
SET name = "Juliana Paes"
WHERE name = "JULIANA PAES";

-- c)

UPDATE Actor
SET 
	name = "Anahi",
	birth_date = "1984-07-11",
	salary = 8000000,
	gender = "female"
WHERE id = "005";

-- d) 0 row(s) affected Rows matched: 0  Changed: 0  Warnings: 0
-- Dá como concluido porém por nao existir esse ID nao altera nada na tabela 

UPDATE Actor
SET name = "Juliana Paes"
WHERE id = "aaa";

-- Exercicio 3

-- a)

DELETE FROM Actor WHERE name = "Fernanda Montenegro";

-- b) 

DELETE FROM Actor WHERE gender = "male" AND salary > 1000000;

-- Exercicio 4

-- a)

SELECT MAX(salary) FROM Actor;

-- b)

SELECT MIN(salary) FROM Actor WHERE gender = "female";

-- c)

SELECT COUNT(*) FROM Actor WHERE gender = "female";

-- d) 

SELECT SUM(salary) FROM Actor;

-- Exercicio 5

-- a) A Query retorna aglutina valores iguais e retorna a quantidade cada um deles

SELECT COUNT(*), gender
FROM Actor
GROUP BY gender;

-- b)

SELECT id, name
FROM Actor
ORDER BY name DESC;

-- c) 

SELECT * FROM Actor
ORDER BY salary ASC;

-- d)

SELECT * FROM Actor
ORDER BY salary DESC LIMIT 3;

-- e)

SELECT AVG(salary), gender
FROM Actor
GROUP BY gender;

-- Exercicio 6

-- a)

ALTER TABLE Movie ADD playing_limit_date VARCHAR(255);

-- b)

ALTER TABLE Movie CHANGE rating rating FLOAT;

-- c)

UPDATE Movie
SET playing_limit_date = "2022-09-30"
WHERE id = "001";

UPDATE Movie
SET playing_limit_date = "2022-07-10"
WHERE id = "003";

-- d)

DELETE FROM Movie WHERE id = "002";

-- É concluida a Query porém nao edita nada pois nao existe filme com essa ID
UPDATE Movie
SET playing_limit_date = CURDATE()
WHERE id = "002";

-- Exercicio 7

-- a)

SELECT COUNT(*) FROM Movie
WHERE playing_limit_date >= CURDATE() AND rating > 7.5;

-- b)

SELECT AVG(rating)
FROM Movie;

-- c)

SELECT COUNT(*) FROM Movie
WHERE playing_limit_date >= CURDATE();

-- d)

SELECT COUNT(*) FROM Movie
WHERE releaseDate > CURDATE();

-- e)

SELECT MAX(rating) FROM Movie;

-- f)

SELECT MIN(rating) FROM Movie;

-- Exercicio 8

-- a)

SELECT * FROM Movie 
ORDER BY title ASC; 

-- b)

SELECT * FROM Movie 
ORDER BY title DESC
LIMIT 5;

-- c) 

SELECT * FROM Movie
WHERE playing_limit_date >= CURDATE()
ORDER BY releaseDate DESC
LIMIT 3;

-- d)

SELECT * FROM Movie
ORDER BY rating DESC
LIMIT 3;