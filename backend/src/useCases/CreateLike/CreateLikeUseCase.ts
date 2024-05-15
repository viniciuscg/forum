import { Like } from "../../entities/Like";
import { ILikeRepository } from "../../repositories/ILikeRepository";
import { IPostRepository } from "../../repositories/IPostRepository";

export class CreateLikeUseCase {
    constructor(
        private databaseLikeRepository: ILikeRepository,
        private databasePostRepository: IPostRepository
    ) {}

    async execute(data: Like) {
        if(!data) throw new Error('Post is invalid')

        const alreadyLiked = await this.databaseLikeRepository.exist(data);

        if (alreadyLiked) throw new Error('User has already liked this post');

        const postLiked = await this.databasePostRepository.getById(data.postId)

        if (!postLiked) throw new Error('post not found')

        postLiked.likes_qtd += 1

        await this.databasePostRepository.update({
            id: postLiked.id!, 
            likes_qtd: postLiked.likes_qtd, 
            content: postLiked.content, 
            img: postLiked.img, 
            title: postLiked.title,
            comments_qtd: postLiked.comments_qtd
        })

        const like = new Like({postId: data.postId, userId: data.userId})

        await this.databaseLikeRepository.create(like)
    }
    
}