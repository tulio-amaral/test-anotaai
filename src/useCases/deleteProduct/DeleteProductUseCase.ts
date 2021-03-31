import { inject, injectable } from 'tsyringe';

import AppError from '../../errors/AppError';
import IProductsRepository from '../../repositories/implementations/IProductsRepository';

@injectable()
class ListCategoryUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const product = this.productsRepository.findByID(id);

    if(!product) {
      throw new AppError('Product not found')
    }

    await this.productsRepository.remove(id);
  }
}

export default ListCategoryUseCase;
