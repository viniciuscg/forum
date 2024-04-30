import { IPostRepository } from "../../repositories/IPostRepository"
import { ICreatePostDTO } from "./CreatePostDTO"

export class CreatePostUseCase {
    constructor(
        private databasePostsRepository: IPostRepository
    ) {}

    async execute(data: ICreatePostDTO) {
        if(!data) throw new Error("Invalid fields")
        await this.databasePostsRepository.save(data)
    }
}