import express from 'express';
import notesRouter from './routes/notesRoutes.js';

const app = express();

app.use("/api/notes", notesRouter);

app.listen(5001, () => {
    console.log("Server started on port 5001");
});