import { IFollowRepository } from "../../repositories/IFollowRepository";
import { IPostRepository } from "../../repositories/IPostRepository";

export class GetAllPostUseCase {
    constructor(
        private databasePostRepository: IPostRepository,
    ) {}

    async execute(page: number) {
        return await this.databasePostRepository.getAll(page)
    }
}