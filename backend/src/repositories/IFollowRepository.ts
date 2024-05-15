import { Follow } from "../entities/Follow"

export interface IGetAllByFollowingDTO {
    followedById: number
}

export interface IFollowRepository {
    create(data: Follow): Promise<void>
    delete(data: Follow): Promise<void>
    isFollowing(data: Follow): Promise<Follow>
    getAllFollows(id: number): Promise<Follow[]>

}