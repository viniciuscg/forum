import { Post } from "../../entities/Post";
import { IFollowRepository } from "../../repositories/IFollowRepository";
import { IPostRepository } from "../../repositories/IPostRepository";

export class GetAllPostUseCase {
    constructor(
        private databasePostRepository: IPostRepository,
    ) {}

    async execute() {
        return await this.databasePostRepository.getAll()
    }
}