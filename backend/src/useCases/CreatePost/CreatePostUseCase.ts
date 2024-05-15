import { Post } from "../../entities/Post"
import { IPostRepository } from "../../repositories/IPostRepository"
import { ICreatePostDTO } from "./CreatePostDTO"

export class CreatePostUseCase {
    constructor(
        private databasePostsRepository: IPostRepository
    ) {}

    async execute(data: ICreatePostDTO) {
        if(!data) throw new Error("Invalid fields")

        const post = new Post({
            authorId: data.authorId,
            content: data.content,
            createDate: new Date(),
            title: data.title,
            img: data.img,
            post_status: true,
            parentId: data.parentId,
            updatedDate: undefined,
            comments_qtd: 0,
            likes_qtd: 0
        })

        if(data.parentId) {
            const postCommented = await this.databasePostsRepository.getById(data.parentId)

            postCommented.comments_qtd += 1

            if(!postCommented) throw new Error('Post not found')

            await this.databasePostsRepository.update({
                id: postCommented.id!,
                comments_qtd: postCommented.comments_qtd,
                content: postCommented.content,
                img: postCommented.img,
                title: postCommented.title,
                likes_qtd: postCommented.likes_qtd,
            })
        }

        await this.databasePostsRepository.save(post)
    }
}