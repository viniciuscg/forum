import { ILikeRepository } from "../../repositories/ILikeRepository";

export class GetAllPostsThatUserLikedUseCase {
    constructor(
        private databaseLikeRepository: ILikeRepository
    ) {}

    async execute(id: number) {
        if(!id) throw new Error("Invalid User")
        
        const likes = await this.databaseLikeRepository.getAllThatUserLiked(id)
        
        const posts = likes.map((like) => like.post);
        
        return posts
    }
}