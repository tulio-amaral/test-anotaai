import { inject, injectable } from 'tsyringe';

import AppError from '../../errors/AppError';
import ICategoriesRepository from '../../repositories/implementations/ICategoriesRepository';
import IProductsRepository from '../../repositories/implementations/IProductsRepository';

type Request = {
  id: string;
  category_id: string;
};

@injectable()
class AssociateCategoryToProductUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute({ id, category_id }: Request): Promise<void> {
    const product = await this.productsRepository.findByID(id);

    if (!product) {
      throw new AppError('Product does not exist!');
    }

    const category = await this.categoriesRepository.findByID(category_id);

    product.category = category;

    this.productsRepository.save(product);
  }
}

export default AssociateCategoryToProductUseCase;
