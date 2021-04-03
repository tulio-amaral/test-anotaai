import { inject, injectable } from 'tsyringe';

import AppError from '../../errors/AppError';
import IProductsRepository from '../../repositories/implementations/IProductsRepository';

type Request = {
  title: string;
  description: string;
  price: number;
};

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('ProductsRepository')
    private productsRepository: IProductsRepository,
  ) {}

  async execute({ title, description, price }: Request): Promise<void> {
    
    if(!title || !description || !price) {
      throw new AppError('Missing params. Make sure you are entering a title, description and price!', 400)
    }

    const productAlreadyExists = await this.productsRepository.findByName(
      title,
    );

    if (productAlreadyExists) {
      throw new AppError('Product already exists!');
    }

    this.productsRepository.create({ title, description, price });
  }
}

export default CreateCategoryUseCase;
