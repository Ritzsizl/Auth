import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.route.js"
import { connectDB } from "./db/dbconn.js";
dotenv.config();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, ()=>{
    connectDB();
    console.log(`server is up on port: ${PORT}`)
})