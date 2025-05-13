/* eslint-disable import/no-unresolved */
import { randomUUID } from 'crypto';

import Product from '../models/Product';
import ProductRepository from '../repositories/ProductRepository';

class ProductService {
  private repository: ProductRepository;

  constructor() {
    
    this.repository = new ProductRepository();
  }

 
  public create(email: string, senha: string): Product {
    const id = randomUUID(); 

    const product = this.repository.create({
      id,
      email,
      senha,
    });

    return product;
  }

  
  public listAll(): Product[] {
    return this.repository.getAll();
  }

  
  public findById(id: string): Product | undefined {
    return this.repository.getById(id);
  }

 
  public update(id: string, email: string, senha: string): Product | null {
    const existingProduct = this.repository.getById(id);

    if (!existingProduct) return null;

    return this.repository.update({
      id,
      data: { email, senha },
    });
  }

  
  public delete(id: string): boolean {
    const index = this.repository.findIndexById(id);

    if (index === -1) return false;

    this.repository.delete(index);
    return true;
  }
}

export default new ProductService();
