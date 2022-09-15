import app from "./app";
import createUser from "./endpoints/createUser";
import getUserData from "./endpoints/getUserData";
import login from "./endpoints/login";

app.post("/user/signup", createUser);
app.post("/user/login", login);
app.get("/user/profile", getUserData);
