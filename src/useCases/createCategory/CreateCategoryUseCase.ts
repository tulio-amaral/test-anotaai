import { inject, injectable } from 'tsyringe';

import AppError from '../../errors/AppError';
import ICategoriesRepository from '../../repositories/implementations/ICategoriesRepository';

@injectable()
class CreateCategoryUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(name: string): Promise<void> {
    const categoryAlreadyExists = await this.categoriesRepository.findByName(
      name,
    );

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists!');
    }

    this.categoriesRepository.create(name);
  }
}

export default CreateCategoryUseCase;
