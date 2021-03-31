import Category from '../../entities/Category';


export default interface ICategoriesRepository {
  create(title: string): Promise<void>;
  findByID(id: string): Promise<Category>;
  findByTitle(title: string): Promise<Category[]>;
  findByName(title: string): Promise<Category>;
}