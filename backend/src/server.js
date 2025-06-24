import express from 'express'
import cors from 'cors'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import path from 'path'
import { Redis } from "@upstash/redis";
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config();



const app = express () 
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

if (process.env.NODE_ENV !== 'production') {
app.use (cors ({}))  // Enable CORS for all origins
}

app.use(express.json()) // Parse JSON bodies
app.use(rateLimiter) // Apply rate limiting middleware
app.use ("/api/notes", notesRoutes) // Use notes routes

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, "../frontend/dist"))) // Serve static files from the public directory
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html")) // Serve index.html for all other routes
})
}


connectDB().then (() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})

