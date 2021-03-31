import { getRepository, Repository } from 'typeorm';

import Product from '../entities/Product';
import AppError from '../errors/AppError';
import IProductsRepository, {
  CreateProductDTO,
} from './implementations/IProductsRepository';

class ProductsRepository implements IProductsRepository {
  private repository: Repository<Product>;

  constructor() {
    this.repository = getRepository(Product);
  }

  async create({ title, description, price }: CreateProductDTO): Promise<void> {
    const product = this.repository.create({
      title,
      description,
      price,
    });

    await this.repository.save(product);
  }

  async list(): Promise<Product[]> {
    const products = await this.repository.find();

    return products;
  }

  async findByName(title: string): Promise<Product> {
    const products = await this.repository.findOne({ title });

    return products;
  }

  async findByTitle(title: string): Promise<Product[]> {
    const products = await this.repository.find({
      where: `"title" ILIKE '%${title}%'`
    });

    if(!products) {
      throw new AppError('Product not found!');
    }

    return products;
  }

  async findByID(id: string): Promise<Product> {
    const product = await this.repository.findOne(id);

    if(!product) {
      throw new AppError('Product not found!');
    }

    return product;
  }

  async save(product: Product): Promise<void> {
    await this.repository.save(product);
  }

  async remove(id: string): Promise<void> {
    await this.repository.delete({ id });
  }
}

export default ProductsRepository;
