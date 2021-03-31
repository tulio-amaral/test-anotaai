import { inject, injectable } from 'tsyringe';

import Category from '../../entities/Category';
import ICategoriesRepository from '../../repositories/implementations/ICategoriesRepository';
import AppError from '../../errors/AppError';

@injectable()
class FindCategoryByTitleUseCase {
  constructor(
    @inject('CategoriesRepository')
    private categoriesRepository: ICategoriesRepository,
  ) {}

  async execute(title:string): Promise<Category[]> {
    const category = await this.categoriesRepository.findByTitle(title);

    if(!category) {
      throw new AppError('Category not found');
    }

    return category;
  }
}

export default FindCategoryByTitleUseCase;
