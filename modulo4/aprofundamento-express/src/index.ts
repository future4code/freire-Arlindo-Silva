import express from "express";

import { AddressInfo } from "net";

import { tarefas, tarefa } from "./data";

const app = express();

app.use(express.json());

app.get("/ping", (req, res) => {          
    res.send("Pong! 🏓").status(200)
})

// Puxa todas as tarefas

app.get("/tarefas", (req, res) => {
    res.send(tarefas).status(200)
})

// Puxa apenas as tarefas incompletas

app.get("/tarefas/afazer", (req, res) => {
    const afazer = tarefas.filter(tarefa =>{
        return !tarefa.completed
    })          
    res.send(afazer).status(200)
})

// Puxa apenas as tarefas completas

app.get("/tarefas/feitos", (req, res) => {          
    const feitos = tarefas.filter(tarefa =>{
        return tarefa.completed
    })          
    res.send(feitos).status(200)
})

// Cria uma nova tarefa

app.post("/tarefas", (req, res) => {
    if (req.body.userId && req.body.id && req.body.title) {
        const tarefa: tarefa = {
            userId: Number(req.body.userId),
            id: Number(req.body.id),
            title: req.body.title,
            completed: false
        }
        const tarefasNovo: tarefa[] = [...tarefas, tarefa]
        res.send(tarefasNovo).status(200)
    }else{
        res.status(404).send("Verifique se passou todas as informações corretamente")        
    }
})

// Altera o status de uma tarefa

app.put("/tarefas/:tarefaId/change", (req, res) => {
        const tarefasNovo = tarefas.map(tarefa => {
            if (Number(req.params.tarefaId) === tarefa.id) {
                return {
                    ...tarefa, completed: !tarefa.completed
                }
            }else{
                return tarefa
            }
        })
        res.send(tarefasNovo).status(200)
})

// Deleta tarefa 

app.delete("/tarefas/:tarefaId", (req, res) => {
    if (req.params.tarefaId) {
        const tarefasNovo: tarefa[] = tarefas.filter(tarefa => {
            return tarefa.id !== Number(req.params.tarefaId)
        })
        res.send(tarefasNovo).status(200)
    }else{
        res.status(404).send("Verifique se passou todas as informações corretamente")        
    }
})

// Retorna afazeres do usuario

app.get("/:userId/tarefas", (req, res) => {
    const selectedUser: tarefa[] = tarefas.filter(tarefa => {
        return tarefa.userId === Number(req.params.userId)
    })
    const others: tarefa[] = tarefas.filter(tarefa => {
        return tarefa.userId !== Number(req.params.userId)
    })
    res.send({selectedUser, others}).status(200)
})

// 


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;