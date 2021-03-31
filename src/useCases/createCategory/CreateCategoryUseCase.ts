import { inject, injectable } from 'tsyringe';

import AppError from '../../errors/AppError';
import ICategoriesRepository from '../../repositories/implementations/ICategoriesRepository';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(title: string): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      title,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Product already exists!');
    }

    this.categoriesRepository.create(title);
  }
}

export default CreateCategoryUseCase;
