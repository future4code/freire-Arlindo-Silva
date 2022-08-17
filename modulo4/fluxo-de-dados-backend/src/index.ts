import express from "express";

import { AddressInfo } from "net";
import { arrayProducts } from "./data";

const app = express();

app.use(express.json());

type product = {
  id: string,
  name: string,
  price: number
}

let products: product[] = arrayProducts

// Exercicio 1 - Testando API

app.get('/test', (req, res) => {
  res.send('API rodando').status(200)
})

// Exercicio 3 - Criando Novo Produto

app.post('/products', (req, res) => {
  try {
    if (req.body.name && req.body.price + 1) {
      if (typeof(req.body.name) !== 'string') {
        throw new Error("O nome deve ser do tipo string")
      }
      if (typeof(req.body.price) !== 'number') {
        throw new Error("O preço deve ser do tipo number")
      }
      if (req.body.price <= 0) {
        throw new Error("O preço deve ser maior que 0")
      }
      const newProduct: product = {
        id: Date.now().toString(), ...req.body
      }
      products = [...products, newProduct]
      res.status(201).send(products)
    } else {
      throw new Error("Um ou todos dos parametros não foram recebidos")
    }
  } catch (error: any) {
    
    switch(error.message){

      case "O nome deve ser do tipo string":
      res.status(422).send(error.message)
      break

      case "O preço deve ser do tipo number":
      res.status(422).send(error.message)
      break

      case "O preço deve ser maior que 0":
      res.status(422).send(error.message)
      break

      case "Um ou todos dos parametros não foram recebidos":
      res.status(422).send(error.message)
      break

      default:
      res.status(500).send("Erro inesperado, consulte o back")
      break
  }

  }

})

// Exercicio 4 - Puxando todos os produtos

app.get('/products', (req, res) => {
  try {
    if (req.query.search) {      
      const search = products.filter(product => {
        return product.name.toLowerCase() === req.query.search?.toString().toLowerCase()
        
      })
      console.log(search);
      
      if (search.length > 0) {
        res.send(search).status(200)
      }else{
        throw new Error("Produto não encontrado")
      }
      
    } else {
      res.send(products).status(200)
    }
    } catch (error: any) {
      res.status(404).send(error.message)
  }  
})

// Exercicio 5 - Editando preço de produto por ID

app.put('/products/:productId', (req, res) => {
  try {
    if (req.params.productId !== ':productId') {

      if (Number(req.params.productId).toString() === 'NaN') {
        throw new Error("ID inválido")
      }

      if (req.body.price && req.body.name) {
        if (typeof(req.body.price) !== 'number') {
          throw new Error("O preço deve ser do tipo number")
        }
        if (req.body.price <= 0) {
          throw new Error("O preço deve ser maior que 0")
        }  
        if (typeof(req.body.name) !== 'string') {
          throw new Error("O nome deve ser do tipo string")
        }
      }else if (req.body.price) {
        if (typeof(req.body.price) !== 'number') {
          throw new Error("O preço deve ser do tipo number")
        }
        if (req.body.price <= 0) {
          throw new Error("O preço deve ser maior que 0")
        }
  
      }else if (req.body.name) {
        if (typeof(req.body.name) !== 'string') {
          throw new Error("O nome deve ser do tipo string")
        }
      }else{
        throw new Error("Parametro a ser alterado não foi informado ou é igual a 0")
      }

      // if (!req.body.price && !req.body.name) {
      //   throw new Error("Novo preço não foi informado ou é igual a 0")
      // }
      
      const [id] = products.filter(product =>{
        return product.id === req.params.productId
      })
      
      if(!id){
        throw new Error("Produto não encontrado")
      }

      products = products.map(product => {
        if (product.id === req.params.productId) {
          return {
            id: product.id,
            name: req.body.name? req.body.name : product.name,
            price: req.body.price? req.body.price : product.price
          }
        }else{
          return product
        }
      })
      res.send(products).status(200)
    } else {
      throw new Error("Informe o ID do produto")
    }
  } catch (error: any) {
    if (
      error.message === ("ID inválido" ||
      "Parametro a ser alterado não foi informado ou é igual a 0" ||
      "O preço deve ser do tipo number" ||
      "O preço deve ser maior que 0") ||     
      "O nome deve ser do tipo string" 
    ) {
      res.status(422).send(error.message)
    }
    else if (error.message === ("Produto não encontrado"  || "Informe o ID do produto")) {
      res.status(404).send(error.message)
    } 
    else {
      res.status(500).send("Erro inesperado, consulte o back")
    }
    
  }  
})

// Exerciixo 6 - Deletando produto por ID 

app.delete('/products/:productId', (req, res) => {
  try {
    if (req.params.productId !== ':productId') {

      const [id] = products.filter(product =>{
        return product.id === req.params.productId
      })
      
      if(!id){
        throw new Error("Produto não encontrado")
      }

      products = products.filter(product => {
        return product.id !== req.params.productId
      })
      res.status(200).send(products)
    }else{
      throw new Error("Informe o ID do produto")
    }
  } catch (error: any) {
    switch (error.message) {
      case "Informe o ID do produto":
        res.status(404).send(error.message)
        break;
      case "Produto não encontrado":
        res.status(404).send(error.message)
        break  
      default:
        res.status(500).send("Erro inesperado, consulte o back")  
        break;
    }
    res.send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;