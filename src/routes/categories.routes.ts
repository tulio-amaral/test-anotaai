import { Router } from "express";

import CreateCategoryController from "../useCases/createCategory/CreateCategoryController";
import FindCategoryByTitleController from "../useCases/findCategoryByTitle/FindCategoryByTitleController";

const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();
const findCategoryByTitleController = new FindCategoryByTitleController()

categoriesRoutes.post('/', createCategoryController.handle);
categoriesRoutes.get('/search/:name', findCategoryByTitleController.handle);

export default categoriesRoutes;