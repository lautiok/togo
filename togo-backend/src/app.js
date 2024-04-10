import express from "express";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import taskRoutes from "./routes/task.routes.js";
import noteRoutes from "./routes/notes.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
const app = express();
const port = process.env.EXPRESS_PORT

// middlewares
app.use(cors({
    origin: process.env.CORS_URL,
    credentials: true
}))

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

