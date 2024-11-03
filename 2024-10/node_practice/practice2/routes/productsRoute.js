import express from "express";
import { addProduct, getAllProducts } from "../controllers/productsController.js";

const router = express.Router();


//get all products
router.get('/', getAllProducts);

//post single product
router.post('/', addProduct);

//patch by id
//delete by id

export default router;