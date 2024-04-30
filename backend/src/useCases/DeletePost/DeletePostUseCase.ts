import { IPostRepository } from "../../repositories/IPostRepository";

export class DeletePostUseCase {
    constructor(
        private databasePostRepository: IPostRepository
    ) {}

    async execute(id: number) {
        if(!id) throw new Error("Invalid post")
        await this.databasePostRepository.delete(id)
    }
}