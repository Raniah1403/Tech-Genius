import express from 'express';
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";
import productRoutes from './src/routes/productRoutes.js';

dotenv.config();

const app = express();

connectDB();

app.get ("/", (req, res) => {
    rs.send("Helo From Bootcamp Day 2");
});

app.use('/api/products', productRoutes);

app.listen(3001, () => {
    console.log(`Server is running on http://localhost:3001`);
});