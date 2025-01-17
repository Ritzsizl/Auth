import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./db/dbconn.js";
dotenv.config();

const PORT = process.env.PORT || 5000;

const app = express();

app.get('/', (req,res)=>{
    res.send("Hello baby")
})

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is up on port: ${PORT}`)
})