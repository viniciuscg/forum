import { IFollowRepository } from "../../repositories/IFollowRepository";
import { IPostRepository } from "../../repositories/IPostRepository";
import { IGetAllPostsByFollowingCaseDTO } from "./GetAllByFollowingDTO";

export class GetAllPostByFollowingUseCase {
    constructor(
        private databasePostRepository: IPostRepository,
        private databaseFollowRepository: IFollowRepository
    ) {}

    async execute(data: IGetAllPostsByFollowingCaseDTO) {
        const followedsIDS = await this.databaseFollowRepository.getAllFollows(data.id)
        const followedID = followedsIDS.map(follow => follow.userId )

        return await this.databasePostRepository.getByUsers({ids: followedID})
    }
}