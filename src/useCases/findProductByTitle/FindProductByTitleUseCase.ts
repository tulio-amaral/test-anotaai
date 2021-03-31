import { inject, injectable } from 'tsyringe';

import Product from '../../entities/Product';
import AppError from '../../errors/AppError';
import IProductsRepository from '../../repositories/implementations/IProductsRepository';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(title:string): Promise<Product[]> {
    const product = await this.productsRepository.findByTitle(title);

    if(!product) {
      throw new AppError('Product not found')
    }

    return product;
  }
}

export default ListCategoryUseCase;
