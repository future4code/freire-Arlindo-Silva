import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { pingRouter } from "./router/pingRouter";
import { userRouter } from "./router/userRouter";
import { UserController } from "./controller/UserController";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const userController = new UserController();

app.post("/users/signup", userController.signup);
app.post("/users/login", userController.login);
app.get("/users", userController.users);
app.delete("/users/:id", userController.delete);

app.listen(process.env.PORT || 3003, () => {
  console.log(`Servidor rodando na porta ${process.env.PORT || 3003}`);
});

app.use("/ping", pingRouter);
app.use("/users", userRouter);
