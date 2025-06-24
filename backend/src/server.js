import express from 'express'
import cors from 'cors'
import notesRoutes from './routes/notesRoutes.js'
import { connectDB } from './config/db.js'
import dotenv from 'dotenv'
import { Redis } from "@upstash/redis";
import rateLimiter from './middleware/rateLimiter.js';
dotenv.config();



const app = express () 
const PORT = process.env.PORT || 5001

app.use (cors ({}))  // Enable CORS for all origins
app.use(express.json()) // Parse JSON bodies
app.use(rateLimiter) // Apply rate limiting middleware
app.use ("/api/notes", notesRoutes) // Use notes routes


connectDB().then (() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error)
})

