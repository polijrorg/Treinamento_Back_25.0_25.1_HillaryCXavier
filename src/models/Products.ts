class Product {
  id: string;
  email: string;
  senha: string;

  constructor(id: string, email: string, senha: string) {
    this.id = id;
    this.email = email;
    this.senha = senha;
  }
}

export default Product;
