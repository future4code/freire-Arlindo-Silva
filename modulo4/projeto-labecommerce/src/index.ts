import { AddressInfo } from "net";
import app from "./app";
import { getAllProducts } from "./endpoints/getAllProducts";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserPurchases } from "./endpoints/getUserPurchases";
import { postProduct } from "./endpoints/postProduct";
import { postPurchase } from "./endpoints/postPurchase";
import { postUser } from "./endpoints/postUser";

// Cria Usuário:

app.post('/users', postUser)

// Busca todos usuários:

app.get("/users", getAllUsers)

// Cadastro de produto:

app.post('/products', postProduct)

// Busca todos os produtos

app.get('/products', getAllProducts)
   
// Registrar compra:

app.post('/purchases', postPurchase)

// Busca as compras de um usuário especifico

app.get('/users/:user_id/purchases', getUserPurchases)


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost:${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});