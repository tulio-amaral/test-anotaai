import { Router } from "express";

import productsRoutes from './products.routes';
import categoriesRoutes from './categories.routes';

const router = Router()

router.use('/products', productsRoutes);
router.use('/categories', categoriesRoutes);

export default router;