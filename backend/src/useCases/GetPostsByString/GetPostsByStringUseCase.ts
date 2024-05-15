import { IPostRepository } from "../../repositories/IPostRepository";

export class GetPostsByStringUseCase {
  constructor(
    private databasePostRepository: IPostRepository
  ) {}

  async execute(name: string) {
    return await this.databasePostRepository.getByName(name)
  }
}