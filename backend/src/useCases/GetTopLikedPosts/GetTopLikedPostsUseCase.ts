import { IPostRepository } from "../../repositories/IPostRepository";

export class GetTopLikedPostsUseCase {
  constructor(
    private databasePostRepository: IPostRepository
  ) {}

  async execute() {
    return await this.databasePostRepository.getTopLikedPosts()
  }
}