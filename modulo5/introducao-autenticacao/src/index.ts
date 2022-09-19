import app from "./app"
import editUser from './endpoints/editUser'
import createUser from './endpoints/createUser'
import login from "./endpoints/login"
import userData from "./endpoints/userData"

app.post('/user/signup', createUser)
app.post('/user/login', login)
app.get('/user/profile', userData)

app.put('/user/edit', editUser)