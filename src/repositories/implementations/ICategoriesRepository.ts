import Category from '../../entities/Category';


export default interface ICategoriesRepository {
  create(name: string): Promise<void>;
  findByID(id: string): Promise<Category>;
  findByTitle(name: string): Promise<Category[]>;
  findByName(name: string): Promise<Category>;
}