import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import noteRoutes from "./routes/notes.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
const app = express();

dotenv.config()
const port = process.env.PORT 

// middlewares
app.use(cors(
    {
        origin: process.env.CORS_URL,
        credentials: true,
        optionsSuccessStatus: 200
        
    }
))

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())


// routes 
app.use ('/api/auth', authRoutes)
app.use ('/api', taskRoutes)
app.use ('/api', noteRoutes)

// Connect to MongoDB
connectDB()
// Create a server
app.listen (port, () => { console.log(`Server running on port ${port}`) })

