// server.js
import express from 'express';
import cors from 'cors';
import { logger } from 'logger-express';
import dotenv from 'dotenv';
import pool from './db/conectionDB.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors()); // Middleware de CORS
app.use(logger());

app.use('/api/v1', ); //colocar ruta de api

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server on http://localhost:${PORT}`);
});
