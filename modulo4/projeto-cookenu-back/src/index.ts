import app from "./app";
import { RecipeEndpoint } from "./endpoints/RecipeEndpoint";
import { UserEndPoint } from "./endpoints/UserEndpoint";

let number: number = 40;
let count: number = 0;

for (let index = 1; index < 41; index++) {
  const soma: number = index * 40;
  count = count + soma;
}

console.log(count);

const userEndpoint = new UserEndPoint();
const recipeEndpoint = new RecipeEndpoint();

app.post("/signup", userEndpoint.signUp);
app.post("/login", userEndpoint.login);
app.post("/user/follow", userEndpoint.follow);
app.post("/user/unfollow", userEndpoint.unfollow);
app.get("/user/feed", userEndpoint.feed);
app.get("/user/profile", userEndpoint.getProfile);
app.get("/user/:id", userEndpoint.getAnotherProfile);
app.delete("/user/:id", userEndpoint.delete);

app.post("/recipe", recipeEndpoint.create);
app.put("/recipe/:id", recipeEndpoint.editRecipe);
app.get("/recipe/:id", recipeEndpoint.getRecipe);
app.delete("/recipe/:id", recipeEndpoint.deleteRecipe);
