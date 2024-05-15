import { Like } from "../entities/Like"

export interface ILikeRepository {
    create(data: Like): Promise<void>
    delete(postId: IDeleteLikeDTO): Promise<void>
    exist(data: Like): Promise<Boolean>
    getAllThatUserLiked(id: number): Promise<Like[]>
}