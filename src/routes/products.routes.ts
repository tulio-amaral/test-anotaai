import { Router } from 'express';

import CreateProductController from "../useCases/createProduct/CreateProductController";
import ListProductController from "../useCases/listProduct/ListProductController";
import FindProductByTitleController from "../useCases/findProductByTitle/FindProductByTitleController";
import DeleteProductController from "../useCases/deleteProduct/DeleteProductController";
import UpdateProductController from "../useCases/updateProduct/UpdateProductController";
import AssociateCategoryToProductController from '../useCases/associateCategoryToProduct/AssociateCategoryToProductController';

const productsRoutes = Router();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const findProductByTitleController = new FindProductByTitleController();
const deleteProductController = new DeleteProductController();
const updateProductController = new UpdateProductController()
const associateProductController = new AssociateCategoryToProductController()

productsRoutes.post('/', createProductController.handle);
productsRoutes.get('/', listProductController.handle);
productsRoutes.get('/search/:title', findProductByTitleController.handle);
productsRoutes.delete('/:id', deleteProductController.handle);
productsRoutes.put('/:id', updateProductController.handle);
productsRoutes.put('/associate/:id', associateProductController.handle);

export default productsRoutes;