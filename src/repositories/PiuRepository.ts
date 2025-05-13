import Piu from '../models/Piu';

interface ICreatePiuDTO {
  id: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

class PiuRepository {
  private pius: Piu[] = [];

  public create(data: ICreatePiuDTO): Piu {
    const piu = new Piu(data.id, data.userId, data.content, data.createdAt, data.updatedAt);
    this.pius.push(piu);
    return piu;
  }

  public getAll(): Piu[] {
    return this.pius;
  }

  public findIndexById(id: string): number {
    return this.pius.findIndex(piu => piu.id === id);
  }

  public delete(index: number): void {
    this.pius.splice(index, 1);
  }
}

export default PiuRepository;
