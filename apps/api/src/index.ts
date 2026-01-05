import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { db } from './lib/db';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Auth routes handled by better-auth usually mount themselves or need manual mounting
// For better-auth with express, we typically use the handler
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth";

app.all("/api/auth/*", toNodeHandler(auth));

// Import other routes (Placeholder for now)
// import recipesRoutes from './routes/recipes.routes';
// app.use('/api/recipes', recipesRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
