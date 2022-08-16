import express from "express";

import { AddressInfo } from "net";

import { posts, users } from "./data";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {          
    res.send("Bateu na URL base")
})

app.get("/users", (req, res) => {
    res.send(users.flat(1))
})

app.get("/posts", (req, res) => {
    res.send(posts)
})

app.get("/:userId/posts", (req, res) => {
    res.send(posts.filter(post => {
        return post.userId === Number(req.params.userId)
    }))
})


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});;

