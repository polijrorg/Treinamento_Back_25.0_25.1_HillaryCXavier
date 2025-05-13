import { randomUUID } from 'crypto';

import Piu from '../models/Piu';
import PiuRepository from '../repositories/PiuRepository';

class PiuService {
  private repository = new PiuRepository();

  public create(userId: string, content: string): Piu {
    const id = randomUUID();
    const now = new Date();

    return this.repository.create({
      id,
      userId,
      content,
      createdAt: now,
      updatedAt: now,
    });
  }

  public listAll(): Piu[] {
    return this.repository.getAll();
  }

  public delete(id: string): boolean {
    const index = this.repository.findIndexById(id);
    if (index === -1) return false;
    this.repository.delete(index);
    return true;
  }
}

export default new PiuService();
