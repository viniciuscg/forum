import { ICreateFollowDTO } from "../useCases/CreateFollow/CreateFollowDTO"

export interface IGetAllByFollowingDTO {
    followedID: number
}

export interface IFollowRepository {
    create(data: ICreateFollowDTO): Promise<void>
    delete(id: number): Promise<void>
    getAllFollowing(id: number): Promise<IGetAllByFollowingDTO[]>
}