import express from "express";
import morgan from "morgan";
import authRoutes from "./routes/auth.routes.js";
import tasksRoutes from "./routes/tasks.routes.js";
import cookieParser from 'cookie-parser' // Instalamos cookie-parser para poder leer las cookies. Sino daria undefined 
import cors from 'cors';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true // Response de cookies.
}))
app.use(morgan('dev')); // Para que me de un mensaje por consola
app.use(express.json()); // Conversión JSON del body
app.use(cookieParser()); // Ejemplo en la función validateToken
app.use('/api', authRoutes);
app.use('/api', tasksRoutes);

export default app;