import { Router } from 'express';

import PiuService from '../services/PiuService';

const piusRouter = Router();


piusRouter.post('/', (req, res) => {
  const { userId, content } = req.body;

  if (!userId || !content) {
    return res.status(400).json({
      message: 'Campos "userId" e "content" são obrigatórios',
    });
  }

  const piu = PiuService.create(userId, content);
  return res.status(201).json(piu);
});


piusRouter.get('/', (req, res) => {
  const pius = PiuService.listAll();
  return res.json(pius);
});


piusRouter.delete('/:id', (req, res) => {
  const deleted = PiuService.delete(req.params.id);

  if (!deleted) {
    return res.status(404).json({ message: 'Piu não encontrado' });
  }

  return res.status(204).send();
});

export default piusRouter;
