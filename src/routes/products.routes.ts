import { Router } from 'express';

import ProductService from '../services/ProductService';

const productsRouter = Router();



productsRouter.post('/', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      message: 'Campos "email" e "senha" são obrigatórios',
    });
  }

  const product = ProductService.create(email, senha);
  return res.status(201).json(product);
});



productsRouter.get('/', (req, res) => {
  const products = ProductService.listAll();
  return res.json(products);
});


productsRouter.get('/:id', (req, res) => {
  const product = ProductService.findById(req.params.id);

  if (!product) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json(product);
});



productsRouter.put('/:id', (req, res) => {
  const { email, senha } = req.body;

  if (!email || !senha) {
    return res.status(400).json({
      message: 'Campos "email" e "senha" são obrigatórios',
    });
  }

  const updatedProduct = ProductService.update(req.params.id, email, senha);

  if (!updatedProduct) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.json(updatedProduct);
});



productsRouter.delete('/:id', (req, res) => {
  const deleted = ProductService.delete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Usuário não encontrado' });
  }

  return res.status(204).send(); 
});

export default productsRouter;
