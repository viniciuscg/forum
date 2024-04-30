import { IPostRepository } from "../../repositories/IPostRepository";

export class UpdatePostUseCase {
    constructor(
        private databasePostsRepository: IPostRepository
    ) {}

    async execute(data: IUpdatePostDTO) {
        if(!data) throw new Error("Invalid fields")
        await this.databasePostsRepository.update(data)
    }
}