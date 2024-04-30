import { IFollowRepository } from "../../repositories/IFollowRepository";
import { IPostRepository } from "../../repositories/IPostRepository";
import { IGetAllPostsByFollowingCaseDTO } from "./GetAllByFollowingDTO";

export class GetAllPostByFollowingUseCase {
    constructor(
        private databasePostRepository: IPostRepository,
        private databaseFollowRepository: IFollowRepository
    ) {}

    async execute(data: IGetAllPostsByFollowingCaseDTO) {
        const followedsIDS = await this.databaseFollowRepository.getAllFollowing(data.id)
        const followedID = followedsIDS.map(follow => follow.followedID )

        return await this.databasePostRepository.getByUsers({page: data.page, ids: followedID})
    }
}