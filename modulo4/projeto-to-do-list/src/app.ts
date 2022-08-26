import express from "express";
import cors from "cors";
import { AddressInfo } from "net";
import connection from "./connection";

const app = express();

app.use(express.json());
app.use(cors());

let errorCode = 400

type user = {
  name: string,
  nickname: string,
  email: string
}

type task = {
	title: string,
  description: string,
	limitDate: Date,
	creatorUserId: number
}

const convertDate = (date: string) => {
  const dateSplit = date.split("/")
  const day = dateSplit[0]
  const month = dateSplit[1]
  const year = dateSplit[2]
  const converted = `${year}/${month}/${day}`
  return converted
}

const revertDate = (date: Date) => {
  let day  = date.getDate().toString(),
      dayF = (day.length == 1) ? '0'+ day : day,
      month  = (date.getMonth()+1).toString(),
      monthF = (month.length == 1) ? '0'+ month : month,
      yearF = date.getFullYear();
  return dayF + "/" + monthF + "/" + yearF;
}

const getAllUsers =async () => {
  const users = await connection('ToDoListUser')
  return users
}

app.get('/user/all', async (req, res) => {
  try {
    let users = await getAllUsers()
    if (!users) {
      users = []
    }
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const createUser = async (
  user: user
): Promise<void> => {
  await connection("ToDoListUser")
    .insert(user)
};

app.post('/user', async (req, res) => {
  try {
    if (!req.body.name || !req.body.nickname || !req.body.email) {
      errorCode = 404
      throw new Error("Please, send all parameters");      
    }
    if (typeof(req.body.name) !== 'string' || 
        typeof(req.body.nickname) !== 'string' || 
        typeof(req.body.email) !== 'string') {
      errorCode = 422
      throw new Error("Please, check the parameters");      
    }
    const body: user = {
      name: req.body.name,
      nickname: req.body.nickname,
      email: req.body.email    
    }
    await createUser(body)
    res.status(201).end();
    
  } catch (error: any) {
    res.status(errorCode).send(error.message || error.sqlMessage)
  }
})

const getUserById = async (id: number): Promise<any> => {
  const result = await connection('ToDoListUser').where({id: id});
  return result[0];
};

app.get('/user/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (!id || isNaN(id)) {
      errorCode = 422
      throw new Error("Check the user id");      
    }    
    const user = await getUserById(id)    
    if (user.length === 0) {
      errorCode = 422
      throw new Error("User not found");    
    }
    res.status(200).send(user)
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const changeUser = async (id: number, name: string, nickname: string) => {
  await connection('ToDoListUser')
  .update({name, nickname})
  .where({id: id})
}

app.put('/user/edit/:id', async (req, res) => {
  try {
    const {name, nickname} = req.body
    const id = Number(req.params.id)
    if (!id || isNaN(id)) {
      errorCode = 422
      throw new Error("Check the user id");      
    }    
    const user = await getUserById(id)    
    if (user.length === 0) {
      errorCode = 422
      throw new Error("User not found");    
    }
    if (!name || !nickname) {
      errorCode = 404
      throw new Error("Please, send all parameters");      
    }
    if (typeof(name) !== 'string' || typeof(nickname) !== 'string') {
      errorCode = 422
      throw new Error("Please, check the parameters");      
    }
    await changeUser(id, name, nickname)
    res.status(200).end()
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const createTask = async (
  task: task
): Promise<void> => {
  await connection("ToDoListTask")
    .insert({
      title: task.title,
      description: task.description,
      limit_date: task.limitDate,
      creator_user_id: task.creatorUserId,
    })
};

app.post('/task', async (req, res) => {
  try {
    let { title, description, limitDate, creatorUserId } = req.body
    if (!title || !description || !limitDate || !creatorUserId) {
      errorCode = 404
      throw new Error("Please, send all parameters");      
    }
    if (typeof(title) !== 'string' || 
        typeof(description) !== 'string' || 
        typeof(limitDate) !== 'string' ||
        typeof(creatorUserId) !== 'number'
        ) {
      errorCode = 422
      throw new Error("Please, check the parameters");      
    }
    const dateSplit = limitDate.split('/');
    if (
      (isNaN(Number(dateSplit[0])) || Number(dateSplit[0]) === 0 || dateSplit[0].length !== 2 || Number(dateSplit[0]) > 31 ) || 
      (isNaN(Number(dateSplit[1])) || Number(dateSplit[1]) === 0 || dateSplit[1].length !== 2 || Number(dateSplit[1]) > 12 ) || 
      (isNaN(Number(dateSplit[2])) || Number(dateSplit[2]) === 0 || dateSplit[2].length !== 4)) {      
        errorCode = 422
        throw new Error('invalid parameter: Limit Date');    
    }
    limitDate = new Date(convertDate(limitDate))

    const body: task = { 
      title, 
      description, 
      limitDate, 
      creatorUserId}
    await createTask(body)

    res.status(201).end();
    
  } catch (error: any) {
    res.status(errorCode).send(error.message || error.sqlMessage)
  }
})

const getTaskById = async (id: number): Promise<any> => {
  const result = await connection('ToDoListTask').where({id: id});
  return result[0];
};

app.get('/task/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (!id || isNaN(id)) {
      errorCode = 422
      throw new Error("Check the task id");      
    }    
    const task = await getTaskById(id)    
    if (task.length === 0) {
      errorCode = 422
      throw new Error("Task not found");    
    }
    const limitDate = revertDate(task.limit_date)
    const user = await getUserById(task.creator_user_id)
    const response =  {
      taskId: `${task.id}`,
      title: task.title,
      description: task.description,
      limitDate: limitDate,
      status: task.status,
      creatorUserId: task.creator_user_id,
      creatorUserNickname: user.nickname
    }    
    res.status(200).send(response)
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const getTaskByCreator = async (id: number) => {
  const result = await connection('ToDoListTask').where({creator_user_id: id});
  return result;
}

app.get('/task', async (req, res) => {
  try {
    const id = Number(req.query.creatorUserId)
    if (!id) {
      errorCode = 404
      throw new Error("Send the User ID");      
    }   
    if (!id || isNaN(id)) {
      errorCode = 422
      throw new Error("Check the user id");      
    }   
    const user = await getUserById(id) 
    if (!user) {
      errorCode = 404
      throw new Error("User not found");      
    }
    let tasks = await getTaskByCreator(id)    
    if (tasks.length === 0) {
      errorCode = 422
      throw new Error("Task not found");    
    }
    tasks = tasks.map((task) => {
      const limitDate = revertDate(task.limit_date)
      return  {
        taskId: `${task.id}`,
        title: task.title,
        description: task.description,
        limitDate: limitDate,
        status: task.status,
        creatorUserId: task.creator_user_id,
        creatorUserNickname: user.nickname
      }    
    })
    res.status(200).send(tasks)
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})



const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

export default app