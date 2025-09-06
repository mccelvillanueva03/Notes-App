import express from 'express';
import dotenv from "dotenv";
import cors from 'cors';

import notesRouter from './routes/notesRoutes.js';
import { connectDB } from './config/db.js';
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config(); 

const app = express();
const PORT = process.env.PORT || 5001;

//middleware 
app.use(cors({
    origin: 'http://localhost:5173',
}));
app.use(express.json()); //to parse JSON bodies
app.use(rateLimiter); //apply rate limiting middleware
 
app.use("/api/notes", notesRouter);

connectDB().then( () => {
    app.listen(PORT, () => {
        console.log("Server started on port", PORT);
    }); 
}) 