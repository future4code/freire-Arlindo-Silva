import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `)
	return result[0][0]
}

// Exercicio 1

// a)  O raw devolve exatamente o que o banco MySQL devolveu, um array de arrays.

// b)

const getActorByName = async (name: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `)
	return result[0][0]
}

/* app.get("/actors/:name", async (req, res) => {
  try {
    const name = req.params.name
    console.log(await getActorByName(name))
    res.end()
  } catch (error: any) {
		console.log(error.message)
    res.status(500).send("Unexpected error")
  }
}) */

// c)

const getCountByGender = async (gender: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT COUNT(*) as total FROM Actor WHERE gender = '${gender}'
  `)
  return result[0][0]
}

// (async () => {
//   console.log(await getCountByGender("female") )
// })()

// Exercicio 2

// a)

const updateActorSalary = async (
  id: string,
  salary: number,
): Promise<void> => {
  await connection("Actor")
  .update({
    salary: salary
  })
  .where({ id: id })
}

// b)

const deleteActorById = async (
  id: string
): Promise<void> => {
  await connection("Actor")
  .delete()
  .where({ id: id })
}

// c)

const AvgSalaryByGender = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
  .avg("salary as média")
  .where({ gender: gender });

  return result[0].média
}

// (async () => {
//   console.log(await AvgSalaryByGender("male") )
// })()

// Exercicio 3

// a)

app.get("/actor/:id", async (req, res) => {
  try {
    const actor = await getActorById(req.params.id);
    res.status(200).send(actor)
  } catch (err: any) {
    res.status(400).send({message: err.message});
  }
});

// b)

app.get("/actor", async (req, res) => {
  try {
    const gender = req.query.gender as string
    const count = await getCountByGender(gender);
    res.status(200).send(count)
  } catch (err: any) {
    res.status(400).send({message: err.message});
  }
});

// Exercicio 4

const createActor = async (
  id: string,
  name: string,
  salary: number,
  birth_date: Date,
  gender: string
): Promise<void> => {
  await connection("Actor")
    .insert({
      id: id,
      name: name,
      salary: salary,
      birth_date: birth_date,
      gender: gender,
    })
};

app.post("/actor", async (req, res) => {
  try {
    await createActor(
      req.body.id,
      req.body.name,
      req.body.salary,
      new Date(req.body.birth_date),
      req.body.gender
    );

    res.status(201).end();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// a)

app.patch('/actor/:id', async (req, res) => {
  try {
    await updateActorSalary(
      req.params.id,
      req.body.salary
    );

    res.status(200).end();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
})

// b) 

app.delete('/actor/:id', async (req, res) => {
  try {
    await deleteActorById(
      req.params.id
    );

    res.status(200).end();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
})

// Exercicio 5

const createMovie = async (
  id: string,
  title: string,
  synopsis: string,
  releaseDate: Date,
  rating: number,
  playingLimitDate: Date
) => {
  await connection("Movie")
    .insert({
      id: id,
      title: title,
      synopsis: synopsis,
      release_date: releaseDate,
      rating: rating,
      playing_limit_date: playingLimitDate,
    });
};

app.post("/movie", async (req, res) => {
  try {
    await createMovie(
      req.body.id,
      req.body.title,
      req.body.synopsis,
      req.body.releaseDate,
      req.body.rating,
      req.body.playingLimitDate
    );

    res.status(201).end();
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Exercicio 6

const getAllMovies = async (limit: number): Promise<any> => {
  const result = await connection('Movie').limit(limit);
  return result;
};

app.get("/movie/all", async (req, res) => {
  try {
    const movies = await getAllMovies(15);

    res.status(200).send({
      movies: movies,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

// Exercicio 7

const searchMovie = async (search: string): Promise<any> => {
  console.log(search);
  
  const result = await connection.raw(`
  SELECT * FROM Movie WHERE title LIKE "%${search}%"
`)
  return result[0];
};

app.get("/movie/search", async (req, res) => {
  try {
    const movies = await searchMovie(req.query.search as string);

    res.status(200).send({
      movies: movies,
    });
  } catch (err: any) {
    res.status(400).send({
      message: err.message,
    });
  }
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app