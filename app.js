import Router from "./backend/src/routers/contactRouter.js";
import express from "express"
import dotenv from "dotenv"
dotenv.config()
import cors from "cors"
import dataBase from "./backend/config/db.js";
const app = express()
const PORT = process.env.PORT || 8000

console.log("EMAIL:", process.env.EMAIL_USER);
console.log("PASS:", process.env.EMAIL_PASS);

app.use(cors())
app.use(express.json())
app.use("/api/contacts",Router)

dataBase()
app.listen(PORT,()=>{
    console.log(
      "server running success ⏲ "
    );
})

