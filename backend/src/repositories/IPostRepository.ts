import { Post } from "../entities/Post"
import { IGetAllPostsByFollowingDataDTO } from "../useCases/GetAllPostByFollowing/GetAllByFollowingDTO"

export interface IPostRepository {
    save(data: Post): Promise<void>
    update(data: IUpdatePostDTO): Promise<void>
    delete(id: number): Promise<void>
    updateStatus(data: IUpdateStatusDTO): Promise<void>
    getAllByUser(data: IGetAllPostsFromUserDTO): Promise<Post[]>
    getByUsers(data: IGetAllPostsByFollowingDataDTO): Promise<Post[]>
    getAll(): Promise<Post[]>
    getById(id: number): Promise<Post>
    getTopLikedPosts(): Promise<Post[]>
    getByName(name: string): Promise<Post[]>
}
