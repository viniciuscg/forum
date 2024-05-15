import { ILikeRepository } from "../../repositories/ILikeRepository";
import { IPostRepository } from "../../repositories/IPostRepository";

export class DeleteLikeUseCase {
    constructor(
        private databaseLikeRepository: ILikeRepository,
        private databasePostRepository: IPostRepository
    ) {}

    async execute(data: IDeleteLikeDTO) {
        if(!data) throw new Error('Post is invalid')

        const postLiked = await this.databasePostRepository.getById(data.postId)

        if (!postLiked) throw new Error('post not found')

        postLiked.likes_qtd -= 1

        await this.databasePostRepository.update({
            id: postLiked.id!, 
            likes_qtd: postLiked.likes_qtd, 
            content: postLiked.content, 
            img: postLiked.img, 
            title: postLiked.title,
            comments_qtd: postLiked.comments_qtd
        })

        await this.databaseLikeRepository.delete(data)
    }
}