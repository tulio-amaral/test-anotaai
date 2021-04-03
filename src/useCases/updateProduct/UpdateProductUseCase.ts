import { inject, injectable } from 'tsyringe';

import AppError from '../../errors/AppError';
import IProductsRepository from '../../repositories/implementations/IProductsRepository';

type Request = {
  id: string;
  title: string;
  description: string;
  price: number;
};

@injectable()
class UpdateCategoryUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ id, title, description, price }: Request): Promise<void> {
    const product = await this.productsRepository.findByID(id);

    if(!product) {
      throw new AppError('Product not found!', 404);
    }

    const productAlreadyExists = await this.productsRepository.findByName(
      title,
    );

    if (productAlreadyExists) {
      throw new AppError('Product already exists!');
    }

    product.title = title;
    product.description = description;
    product.price = price;

    this.productsRepository.save(product);
  }
}

export default UpdateCategoryUseCase;
