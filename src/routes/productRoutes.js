import express from 'express';
import { getProduct } from '../controllers/productController.js';

const router = express.Router();

router.get("/", getProduct);
//router.get("/:id");
//router.post("/");
//router.put("/:id");
//router.delete("/:id");
export default router;