import Router from "./src/routers/contactRouter.js";
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import dataBase from "./config/db.js";
dotenv.config()
const app = express()
const PORT = process.env.PORT

app.use(cors)
app.use(express.json())
app.use("/api/contacts",Router)

dataBase()
app.listen(()=>{
    console.log(
      "server running success ⏲ "
    );
    
})
