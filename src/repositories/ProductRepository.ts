
// eslint-disable-next-line import/no-unresolved
import Product from '../models/Product';

interface ICreateHeroDTO {
  id: string;
  email: string;
  senha: string;
}

interface IUpdateHeroDTO {
  id: string;
  data: {
    email: string;
    senha: string;
  };
}

class ProductRepository {
  private products: Product[];

  constructor() {
    
    this.products = [];
  }

  
  public create(data: ICreateHeroDTO): Product {
    const { id, email, senha } = data;

    const product = new Product(id, email, senha);
    this.products.push(product); 

    return product;
  }

  
  public getAll(): Product[] {
    return this.products;
  }

  
  public getById(id: string): Product | undefined {
    return this.products.find(product => product.id === id);
  }

  
  public findIndexById(id: string): number {
    return this.products.findIndex(product => product.id === id);
  }

  
  public update(data: IUpdateHeroDTO): Product {
    const index = this.findIndexById(data.id);

    this.products[index] = {
      ...this.products[index], 
      ...data.data, 
    };

    return this.products[index];
  }

  
  public delete(index: number): void {
    this.products.splice(index, 1); 
  }
}

export default ProductRepository;
