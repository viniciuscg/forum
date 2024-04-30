import { Post } from "../entities/Post"
import { ICreatePostDTO } from "../useCases/CreatePost/CreatePostDTO"
import { IGetAllPostsByFollowingDataDTO } from "../useCases/GetAllPostByFollowing/GetAllByFollowingDTO"

export interface IPostRepository {
    save(data: ICreatePostDTO): Promise<void>
    update(data: IUpdatePostDTO): Promise<void>
    delete(id: number): Promise<void>
    updateStatus(data: IUpdateStatusDTO): Promise<void>
    getAllByUser(data: IGetAllPostsFromUserDTO): Promise<Post[]>
    getByUsers(data: IGetAllPostsByFollowingDataDTO): Promise<Post[]>
    getAll(page: number): Promise<Post[]>
    getById(id: number): Promise<Post>
}

