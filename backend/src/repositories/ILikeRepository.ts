import { ICreateLikeDTO } from "../useCases/CreateLike/CreateLikeDTO"

export interface ILikeRepository {
    create(data: ICreateLikeDTO): Promise<void>
    delete(postId: number): Promise<void>
}