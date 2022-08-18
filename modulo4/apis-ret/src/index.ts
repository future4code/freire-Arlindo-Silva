import express, { Request, Response } from 'express'
import cors from 'cors'

// ENUM para type user ou admin

enum UserType {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL"
}

// type para user

type User = {
  id: number,
  name: string,
  email: string,
  type: UserType,
  age: number
}

// Mock simulando um array de usuários no Banco de Dados

let users: User[] = [
  {
      id: 1,
      name: "Alice",
      email: "alice@email.com",
      type: UserType.ADMIN,
      age: 12
  },
  {
      id: 2,
      name: "Bob",
      email: "bob@email.com",
      type: UserType.NORMAL,
      age: 36
  },
  {
      id: 3,
      name: "Coragem",
      email: "coragem@email.com",
      type: UserType.NORMAL,
      age: 21
  },
  {
      id: 4,
      name: "Dory",
      email: "dory@email.com",
      type: UserType.NORMAL,
      age: 17
  },
  {
      id: 5,
      name: "Elsa",
      email: "elsa@email.com",
      type: UserType.ADMIN,
      age: 17
  },
  {
      id: 6,
      name: "Fred",
      email: "fred@email.com",
      type: UserType.ADMIN,
      age: 60
  }
]

const app = express()
app.use(express.json())
app.use(cors())

let codeError: number = 400

// Para testar se o servidor está tratando os endpoints corretamente
app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong!")
})

// Exercicio 1 - Puxando todos usuários
// Usando o metodo GET e a entidade /users

// Exercicio 2 - Puxando user por type válido
// Usei ENUM para que apenas possa ter doisa valores no type
// Passei o parametro type via Query Params pois foi o jeito mais fácil que pensei para usar 
// apenas uma requisição tanto para todos usuários como para usuários por type

// Exercicio 3 - Implementando busca de user por nome
// Usei Query Params para realiar a buscar por ser o mais utilizado e também para poder manter apenas uma requisição

app.get("/users", (req: Request, res: Response) => {
  try {
    if (req.query.type) {
      const type: string = (req.query.type as string).toUpperCase()
      if (type === UserType.ADMIN || type === UserType.NORMAL) {
        const filtered: User[] = users.filter(user =>{
          return user.type === type
        })
        res.status(200).send(filtered)            
      }else{
        codeError = 404
        throw new Error("Please send a valid type of user");
      }      
    }else if (req.query.search) {
      const search: string = (req.query.search as string).toUpperCase()
      const result: User[] = users.filter(user => {
        return user.name.toUpperCase().includes(search)
      })
      if (result.length > 0) {
        res.status(200).send(result) 
      } else {
        codeError = 404
        throw new Error("Can't find a user with this name");        
      }
    }else{
      res.status(200).send(users)
    }    
  } catch (error: any) {
    res.status(codeError).send(error.message)
  }  
})

// Exercicio 4- Craindo novo usuário
// Se eu mudar para PUT continuará funcionando porém isso não seria uma boa prática já que o POST é o método para criação

app.post('/users', (req, res) => {
  const {name, email, type, age} = req.body
  try {
    if (!name || !email || !type || !age) {
      codeError = 422
      throw new Error("Please, send all parameters");    
    }
    if (
      (type.toUpperCase() !== UserType.ADMIN && type.toUpperCase() !== UserType.NORMAL) ||
      (typeof(name) !== 'string') || (typeof(email) !== 'string') || (typeof(age) !== 'number')
      ) {
      codeError = 422
      throw new Error("Check the parameters");    
    }
    const newUser: User ={
      id: users.length + 1,
      name,
      email,
      type: type.toUpperCase(),
      age
    }
    users.push(newUser)
    res.status(201).send(users)
  } catch (error: any) {
    res.status(codeError).send(error.message)
  }  
})

// Exercicio 5

app.put('/users', (req, res) => {
  try {
    if (!req.body.name) {
      codeError = 404
      throw new Error("Please, send the new name");    
    }
    const newName: string = req.body.name as string
    users = users.map(user => {
      if (user.id === users.length) {
        return {
          id: user.id,
          name: `${newName} --ALTERADO`,
          email: user.email,
          type: user.type,
          age: user.age
        }
      }else{
        return user
      }
    })
    res.status(200).send()
    } catch (error: any) {
      res.status(codeError).send(error.message)
  }
})

// Exercicio 6

app.patch('/users', (req, res) => {
  try {
    if (!req.body.name) {
      codeError = 404
      throw new Error("Please, send the name");    
    }
    const newName: string = req.body.name as string
    users = users.map(user => {
      if (user.id === users.length) {
        return {
          id: user.id,
          name: `${newName} --REALTERADO`,
          email: user.email,
          type: user.type,
          age: user.age
        }
      }else{
        return user
      }
    })
    res.status(200).send()
    } catch (error: any) {
      res.status(codeError).send(error.message)
  }
})

// Exercicio 7

app.delete('/users/:userId', (req, res) => {
  try {
    if (req.params.userId) {
      const id: number = Number(req.params.userId)
      if (isNaN(id)) {
        codeError = 422
        throw new Error("Please, send a valid ID");        
      }
      let haveUser: boolean = false
      for (const user of users) {
        if (user.id === id) {
          haveUser = true
        }
      }
      if (haveUser === false) {
        codeError = 404
        throw new Error("There is no user with the given ID");
      }
      users = users.filter(user => {
        return user.id !== id
      })
      res.status(200).send(users)
    } else {
      codeError = 404
      throw new Error("Please, send the User ID");      
    }
  } catch (error: any) {
    res.status(codeError).send(error.message)
  }
})


app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
