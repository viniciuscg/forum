import { ILikeRepository } from "../../repositories/ILikeRepository";

export class DeleteLikeUseCase {
    constructor(
        private databaseLikeRepository: ILikeRepository
    ) {}

    async execute(postId: number) {
        if(!postId) throw new Error('Post is invalid')

        await this.databaseLikeRepository.delete(postId)
    }
}