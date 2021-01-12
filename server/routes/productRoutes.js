import express from 'express';
const router = express.Router();
import { getProducts, getProductById } from '../controllers/productController.js'


//@fetch all products
router.get('', getProducts)
router.get('/:id', getProductById)

export default router;