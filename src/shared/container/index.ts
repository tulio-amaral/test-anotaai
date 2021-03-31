import { container } from 'tsyringe';

import ProductsRepository from '../../repositories/ProductsRepository';
import IProductsRepository from '../../repositories/implementations/IProductsRepository';
import CategoriesRepository from '../../repositories/CategoriesRepository';
import ICategoriesRepository from '../../repositories/implementations/ICategoriesRepository';

container.registerSingleton<ICategoriesRepository>(
  'CategoriesRepository',
  CategoriesRepository,
);

container.registerSingleton<IProductsRepository>(
  'ProductsRepository',
  ProductsRepository,
);