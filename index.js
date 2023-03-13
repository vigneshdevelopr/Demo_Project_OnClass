import express  from "express";
import dotenv from "dotenv";
import { createConnection } from "./db.js";
dotenv.config();
import cors from "cors"
import { signupRouter } from "./Routers/signup.js";
import { loginRouter } from "./Routers/login.js";
import { contentRouter } from "./Routers/content.js";
import { isSignedIn } from "./Controllers/auth.js";
import  jwt  from "jsonwebtoken"

const app = express();

const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use('/user', signupRouter)
app.use('/user', loginRouter)
app.use('/user',isSignedIn, contentRouter)
createConnection();
app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
})
//================================================================

app.get('/', (req, res)=>{
res.status(200).send("working")
console.log("working");
})