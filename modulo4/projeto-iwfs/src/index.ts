import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

type transaction = {
  value: number,
  date: string,
  description: string
}

type account = {
  name: string,
  cpf: string,
  birthDate: string,
  balance: number,
  transactions: transaction[]
}


const today = new Date(),
        dia  = today.getDate().toString(),
        diaF = (dia.length == 1) ? '0'+dia : dia,
        mes  = (today.getMonth()+1).toString(), //+1 pois no getMonth Janeiro começa com zero.
        mesF = (mes.length == 1) ? '0'+mes : mes,
        anoF = today.getFullYear(),
        todayString = diaF+"/"+mesF+"/"+anoF;

let errorCode = 400

let accounts: account[] = [
  {
    name: 'Arlindo Vinicius',
    cpf: '07021914504',
    birthDate: '19/06/1999',
    balance: 1000,
    transactions: [
      {
        value: -30,
        date: '18/08/2022',
        description: 'Corte de cabelo'
      }
    ]
  }
]

app.post('/accounts', (req, res) => {
  try {
    const {name, cpf, birthDate} = req.body
    
    if (!cpf || !name || !birthDate) {
      errorCode = 422
      throw new Error("Please send all parameters");      
    }

    const dateSplit = birthDate.split('/' || '');

    if (
      (isNaN(Number(dateSplit[0])) || Number(dateSplit[0]) === 0 || dateSplit[0].length !== 2 || Number(dateSplit[0]) > 31 ) || 
      (isNaN(Number(dateSplit[1])) || Number(dateSplit[1]) === 0 || dateSplit[1].length !== 2 || Number(dateSplit[1]) > 12 ) || 
      (isNaN(Number(dateSplit[2])) || Number(dateSplit[2]) === 0 || dateSplit[2].length !== 4)) {      
        errorCode = 422
        res.send('invalid parameter: birtDate');    
    }

    if (typeof(name) !== 'string') {
      errorCode = 422
      res.send('invalid parameter: name')
    }

    if (typeof(cpf) !== 'string' || isNaN(Number(cpf)) || cpf.length !== 11 || cpf.includes(` `)) {
      errorCode = 422
      res.send('invalid parameter: CPF')
    }
    
    const day = dateSplit[0];
    const month = dateSplit[1];
    const year = dateSplit[2];  
    let date = new Date(year, month - 1, day);
    const diff =  today.getTime() - date.getTime()
    const age: number = Number((diff / (1000 * 60 * 60 * 24 * 365)).toFixed(0))
    
    if (age < 18) {
      errorCode = 401
      throw new Error("Age less than 18 years");
      
    }
    
    const checkCpf = accounts.filter(account => {
      return account.cpf === cpf
    })

    if (checkCpf.length > 0) {
      errorCode = 409
      throw new Error("There is already an account registered with the CPF provided");
    }
  
    const newAccount: account ={
      name,
      cpf,
      birthDate,
      balance: 0,
      transactions: []
    }

    accounts.push(newAccount)
  
    res.status(201).end()
    } catch (error: any) {
      res.status(errorCode).send(error.message)
  }
  
})

app.get('/accounts/account', (req, res) => {
  try {
    if (!req.query.cpf) {
      errorCode = 422
      throw new Error("Please inform CPF");
    }

    const cpf = req.query.cpf as string

    if (typeof(cpf) !== 'string' || isNaN(Number(cpf)) || cpf.length !== 11 || cpf.includes(` `)) {
      errorCode = 422
      res.send('invalid parameter: CPF')
    }

    const accountBalance = accounts.filter(account => {
      return account.cpf === cpf
    }).map(account => {
      return {balance: account.balance}
    })

    if (accountBalance.length === 0) {
      errorCode = 404
      throw new Error("Account not find");
    }

    res.status(200).send(accountBalance)

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.put('/accounts/account', (req, res) => {
  try {
    
    const {name, value, cpf} = req.body

    if (!cpf || !name || !value) {
      errorCode = 404
      throw new Error("Please send all parameters");      
    }

    if (typeof(name) !== 'string') {
      errorCode = 422
      res.send('invalid parameter: name')
    }

    if (typeof(cpf) !== 'string' || isNaN(Number(cpf)) || cpf.length !== 11 || cpf.includes(` `)) {
      errorCode = 422
      res.send('invalid parameter: CPF')
    }

    if (typeof(value) !== 'number') {
      errorCode = 422
      res.send('invalid parameter: value')
    }

    let check: boolean = false

    for (const account of accounts) {
      if (account.name === name && account.cpf === cpf) {
        check = true
      }
    }
    if (check === false) {
      errorCode = 422
      throw new Error("Please check the name and CPF");      
    }
    accounts = accounts.map(account => {
      if (account.name === name && account.cpf === cpf) {
        return {
          name: account.name,
          cpf: account.cpf,
          birthDate: account.birthDate,
          balance: account.balance + value,
          transactions: [...account.transactions, {
            value: value,
            date: todayString,
            description: "Depósito de dinheiro"
          }]
        }
      }else{
        return account
      }
    })
    res.status(200).send(accounts)
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.post('/accounts/account/:cpf', (req, res) => {
  try {
    if (!req.params.cpf || req.params.cpf === ':cpf') {
      errorCode = 404
      throw new Error("Please inform CPF");
      
    }

    const cpf = req.params.cpf as string

    if (typeof(cpf) !== 'string' || isNaN(Number(cpf)) || cpf.length !== 11 || cpf.includes(` `)) {
      errorCode = 422
      res.send('invalid parameter: CPF')
    }
    
    let {date, value, description} = req.body

    if (!date) {
      date = todayString
    }

    if (typeof(date) !== 'string' || typeof(value) !== 'number' || typeof(description) !== 'string') {
      errorCode = 422
      throw new Error("Check the parameters");
    }

    const dateSplit = date.split('/' || '');

    if (
      (isNaN(Number(dateSplit[0])) || Number(dateSplit[0]) === 0 || dateSplit[0].length !== 2 || Number(dateSplit[0]) > 31 ) || 
      (isNaN(Number(dateSplit[1])) || Number(dateSplit[1]) === 0 || dateSplit[1].length !== 2 || Number(dateSplit[1]) > 12 ) || 
      (isNaN(Number(dateSplit[2])) || Number(dateSplit[2]) === 0 || dateSplit[2].length !== 4)) {      
        errorCode = 422
        res.send('invalid parameter: date');    
    }

    accounts = accounts.map(account => {
      if (account.cpf === cpf) {
        return{
          ...account,
          transactions: [
            ...account.transactions,
            {
              value: -value,
              date: date,
              description: description
            }
          ]
        }
      }else{
        return account
      }
    })
    res.status(200).send(accounts)    

  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.put('/accounts', (req, res) => {
  try {
    accounts = accounts.map(account => {
      for (const transaction of account.transactions) {
        const dateSplit = transaction.date.split('/')
        const day = Number(dateSplit[0]);
        const month = Number(dateSplit[1]);
        const year = Number(dateSplit[2]);  
        let date = new Date(year, month - 1, day);
        const diff =  today.getTime() - date.getTime()
        const days: number = Number(((diff / (1000 * 60 * 60 * 24)).toFixed(1))[0])
        if (days > 0) {
          
        } else {
          
        }
      }
      return account
    })
    res.send
  } catch (error: any) {
    res.status(errorCode).send(error.message)
  }
})

app.get("/accounts", (req: Request, res: Response) => {
  res.status(200).send(accounts)
})

app.listen(3003, () => {
  console.log('Server is running at port 3003')
})
