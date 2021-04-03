import { getRepository, Repository } from 'typeorm';

import Category from '../entities/Category';
import AppError from '../errors/AppError';
import ICategoriesRepository from './implementations/ICategoriesRepository';

class CategoriesRepository implements ICategoriesRepository {
  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create(name: string): Promise<void> {
    const category = this.repository.create({
      name,
    });

    await this.repository.save(category);
  }

  async findByID(id: string): Promise<Category> {
    const category = await this.repository.findOne(id);

    if(!category) {
      throw new AppError('Category not found!');
    }

    return category;
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repository.findOne({ name });

    return category;
  }

  async findByTitle(name: string): Promise<Category[]> {
    const categories = await this.repository.find({
      where: `"name" ILIKE '%${name}%'`
    });

    if(!categories) {
      throw new AppError('Product not found!');
    }

    return categories;
  }
  
}

export default CategoriesRepository;
