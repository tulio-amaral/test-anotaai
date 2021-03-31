import Product from '../../entities/Product';

export type CreateProductDTO = {
  title: string;
  description: string;
  price: number;
};

export default interface IProductsRepository {
  create({ title, description, price }: CreateProductDTO): Promise<void>;
  list(): Promise<Product[]>;
  findByTitle(title: string): Promise<Product[]>;
  findByName(title: string): Promise<Product>;
  findByID(id: string): Promise<Product>;
  save(product: Product): Promise<void>;
  remove(id: string): Promise<void>;
  // update()
}