import { IPostRepository } from "../../repositories/IPostRepository";

export class GetPostByIdUseCase {
  constructor(
    private databasePostRepository: IPostRepository
  ) {}

  async execute(id: number) {
    if (!id) throw new Error('Invalid post')
    
    const findPosts = await this.databasePostRepository.getById(id)

    if (!findPosts) throw new Error("Post not found");
    
    return findPosts
  }
}