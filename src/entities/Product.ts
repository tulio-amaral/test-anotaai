import { Column, Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { v4 as uuid } from 'uuid';
import Category from "./Category";

@Entity('products')
class Product {
  @PrimaryColumn('uuid')
  id: string;

  @Column()
  title: string;
  
  @Column()
  description: string;

  @Column()
  price: number;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}

export default Product;