import { inject, injectable } from 'tsyringe';

import Product from '../../entities/Product';
// import AppError from '../../../../errors/AppError';
import IProductsRepository from '../../repositories/implementations/IProductsRepository';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.list();

    return products;
  }
}

export default ListCategoryUseCase;
