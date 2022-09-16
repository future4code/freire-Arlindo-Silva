import app from "./app";
import { RecipeEndpoint } from "./endpoints/RecipeEndpoint";
import { UserEndPoint } from "./endpoints/UserEndpoint";

const userEndpoint = new UserEndPoint();
const recipeEndpoint = new RecipeEndpoint();

app.post("/signup", userEndpoint.signUp);
app.post("/login", userEndpoint.login);
app.post("/user/follow", userEndpoint.follow);
app.post("/user/unfollow", userEndpoint.unfollow);
app.get("/user/feed", userEndpoint.feed);
app.get("/user/profile", userEndpoint.getProfile);
app.get("/user/:id", userEndpoint.getAnotherProfile);

app.post("/recipe", recipeEndpoint.create);
app.get("/recipe/:id", recipeEndpoint.getRecipe);