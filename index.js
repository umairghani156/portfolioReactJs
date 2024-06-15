import express from "express";
import userRoute from "./routes/userRoute.js";
import dotenv from "dotenv";
import cors from "cors";

const app = express();
app.use(express.json());
dotenv.config()

const PORT = process.env.PORT || 8000;

app.use(cors({
    origin: "https://signup-testing-df112.web.app",
    withCredentials: true,
}))
app.get("/",(req,res)=>{
   res.send("Hello world")
})

app.use('/api/v1',userRoute);


app.listen(PORT,()=>{
    console.log("App is running on the port 8000");
})