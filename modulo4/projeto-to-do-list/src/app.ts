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

const getTaskDelayed = async () => {
  const tasks = await connection.raw(`
    SELECT task.id as id, creator_user_id, title, description, limit_date, nickname
    FROM ToDoListTask as task
    LEFT JOIN ToDoListUser as user ON task.creator_user_id = user.id
    WHERE task.limit_date < CURDATE()
  `)
  return tasks[0]
}

app.get('/task/delayed',async (req, res) => {
  try {
    let tasks: any[] = await getTaskDelayed()
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
        creatorUserNickname: task.nickname
      }    
    })
    res.status(200).send(tasks)


  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
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
    const responsibleUsers = await getResponsibleUsers(task.id)
    const response =  {
      taskId: `${task.id}`,
      title: task.title,
      description: task.description,
      limitDate: limitDate,
      status: task.status,
      creatorUserId: task.creator_user_id,
      creatorUserNickname: user.nickname, 
      responsibleUsers: responsibleUsers
    }    
    res.status(200).send(response)
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const getTaskByCreator = async (id: number) => {
  const result = await connection
  .select('task.id as id', 'creator_user_id', 'title', 'description', 'limit_date', 'nickname')
  .from('ToDoListTask as task')
  .leftJoin('ToDoListUser as user', 'task.creator_user_id', 'user.id')
  .where({creator_user_id: id});
  return result;
}

const getTaskByStatus = async (status: string) => {
  const tasks = await connection
  .select('task.id as id', 'creator_user_id', 'title', 'description', 'limit_date', 'nickname')
  .from('ToDoListTask as task')
  .leftJoin('ToDoListUser as user', 'task.creator_user_id', 'user.id')
  .where({status: status});
  return tasks;
}

const searchTask = async (search: string) => {
  const tasks = await connection
  .select('task.id as id', 'creator_user_id', 'title', 'description', 'limit_date', 'nickname')
  .from('ToDoListTask as task')
  .leftJoin('ToDoListUser as user', 'task.creator_user_id', 'user.id')
  .whereLike('title', `%${search}%`)
  .orWhereLike('description', `%${search}%`)
  return tasks
}

// Task por pesquisa, criador ou status

app.get('/task', async (req, res) => {
  if (req.query.creatorUserId) {
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
          creatorUserNickname: task.nickname
        }    
      })
      res.status(200).send(tasks)
    } catch (error: any) {
      res.status(errorCode).send(error.sqlMessage || error.message)
    }
  }else if (req.query.status) {
    try {
      console.log('entrei');
      
      const status = req.query.status
      if (status === 'to_do' || status === 'doing' || status === 'done') {
        let tasks = await getTaskByStatus(status)
        
        tasks = tasks.map((task) => {
          const limitDate = revertDate(task.limit_date)
          return  {
            taskId: `${task.id}`,
            title: task.title,
            description: task.description,
            limitDate: limitDate,
            status: task.status,
            creatorUserId: task.creator_user_id,
            creatorUserNickname: task.nickname
          }    
        })
          res.status(200).send(tasks)
      }else{
        errorCode = 422
        throw new Error("Please, check the status parameter");      
      }
    } catch (error: any) {
      res.status(errorCode).send(error.sqlMessage || error.message)
    }
  }else if (req.query.search) {
    try {
      const search = req.query.search as string
      if (!search) {
        errorCode = 404
        throw new Error("Please, send the parameter");
      }
      let tasks = await searchTask(search)
      tasks = tasks.map((task) => {
        const limitDate = revertDate(task.limit_date)
        return  {
          taskId: `${task.id}`,
          title: task.title,
          description: task.description,
          limitDate: limitDate,
          status: task.status,
          creatorUserId: task.creator_user_id,
          creatorUserNickname: task.nickname
        }    
      })
    res.status(200).send(tasks)
    } catch (error: any) {
      res.status(errorCode).send(error.sqlMessage || error.message)
    }
    }else{
    res.status(404).end()
  }
})

const searchUser = async (search: string) => {
  const users = await connection('ToDoListUser')
  .whereLike('email', `%${search}%`)
  .orWhereLike('nickname', `%${search}%`)
  return users
}

app.get('/user',async (req, res) => {
  try {
    const search = req.query.search as string
    if (!search) {
      errorCode = 404
      throw new Error("Please, send the parameter");
    }
    const users = await searchUser(search)
    res.status(200).send(users)
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const assignToUser = async (taskId:number, userIds: number[])
: Promise<void> => {
  for (const user of userIds) {
    await connection('ToDoListResponsibleUserTaskRelation')
    .insert({
      'task_id': taskId,
      'responsible_user_id': user
    })
  }  
}

app.post('/task/responsible',async (req, res) => {
  try {
    const userIds = req.body.responsible_user_ids
    const taskId = req.body.task_id
    if (!userIds|| !taskId) {
      errorCode = 404
      throw new Error("Please, send all parameters");      
    }
    await assignToUser(taskId, userIds)
    res.status(201).end()
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const getResponsibleUsers = async (taskId: number): Promise<any>  => {
  const users = await connection
  .select('id', 'nickname')
  .from('ToDoListResponsibleUserTaskRelation')
  .leftJoin('ToDoListUser', 'ToDoListResponsibleUserTaskRelation.responsible_user_id', 'ToDoListUser.id')
  .where('task_id', `${taskId}`)
  return users;
}

app.get('/task/:id/responsible',async (req, res) => {
  try {
    const taskId = Number(req.params.id)
    if (!taskId || isNaN(taskId)) {
      errorCode = 422
      throw new Error("Please, send a valid task id");      
    }
    const task = await getTaskById(taskId)
    if (task.lenght === 0) {
      errorCode = 404
      throw new Error("Task not found");      
    }
    const users = await getResponsibleUsers(taskId)
    res.status(200).send({users: users})
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const updateTaskStatus = async (status: string, id: number[]): Promise<void>   => {
  for (const task of id) {
    await connection('ToDoListTask').update({status: status})
    .where({id: task})
  
  }
}

app.put('/task/status/edit',async (req, res) => {
  try {
    const ids = req.body.task_ids as number[]
    const status = req.body.status as string
    if (!ids) {
      errorCode = 422
      throw new Error("Please, send a valid task id");      
    }
    for (const id of ids) {
      const task = await getTaskById(id)    
      if (task.lenght === 0) {
        errorCode = 404
        throw new Error(`Task ${id} not found`);      
      }
    }    
    if (!status) {
      errorCode = 404
      throw new Error("Send the new task status");      
    }
    if (status === 'to_do' || status === 'doing' || status === 'done') {
      await updateTaskStatus(status, ids)
      res.status(200).end()
      }else{
      errorCode = 422
      throw new Error("Please, check the status parameter");      
    }
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const delRespUser = async (taskId: number, userId: number) => {
  await connection.delete().from('ToDoListResponsibleUserTaskRelation')
  .where({responsible_user_id: userId}).andWhere({task_id: taskId})
}

app.delete('/task/:taskId/responsible/:responsibleUserId',async (req, res) => {
  try {
    const userId = Number(req.params.responsibleUserId)
    const taskId = Number(req.params.taskId)
    if (!userId || !taskId || isNaN(userId) || isNaN(taskId)) {
      errorCode = 404
      throw new Error("Check the parameters");      
    }
    const task = await getTaskById(taskId)
    const user = await getUserById(userId)
    if (task.length === 0) {
      errorCode = 404
      throw new Error("Task not found");
    }
    if (user.length === 0) {
      errorCode = 404
      throw new Error("User not found");      
    }
    let respUser: any[] = await getResponsibleUsers(taskId)
    console.log(respUser);
    
    respUser = respUser.filter(task => {
      if (Number(task.id) === userId) {
        return true
      }else{
        return false
      }
    })
    if (respUser.length === 0) {
      errorCode = 404
      throw new Error("This User don't have a task with this id");      
    }
    await delRespUser(taskId, userId)
    res.status(200).end()
  } catch (error: any) {
    res.status(errorCode).send(error.sqlMessage || error.message)
  }
})

const delTask = async (id: number) => {
  await connection('ToDoListResponsibleUserTaskRelation')
  .delete().where('task_id', id)
  await connection('ToDoListTask')
  .delete().where('id', id)
}

app.delete('/task/:id',async (req, res) => {
  try {
    const id = Number(req.params.id)
    if (!id || isNaN(id)) {
      errorCode = 404
      throw new Error("Check the task id");      
    }
    const task = await getTaskById(id)
    if (!task || task.length === 0) {
      errorCode = 404
      throw new Error("Task not found");
    }
    await delTask(id)
    res.status(200).end()
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