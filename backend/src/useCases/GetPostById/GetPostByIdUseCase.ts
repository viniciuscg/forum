import { IPostRepository } from "../../repositories/IPostRepository";

export class GetPostByIdUseCase {
  constructor(
    private databasePostRepository: IPostRepository
  ) {}

  async execute(id: number) {
    if (!id) throw new Error('Invalid post')
    
    return await this.databasePostRepository.getById(id)
  }
}