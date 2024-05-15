import { Follow } from "../../entities/Follow";
import { IFollowRepository } from "../../repositories/IFollowRepository";

export class CreateFollowUseCase {
    constructor(
        private databaseFollowRepository: IFollowRepository
    ) {}

    async execute(data: Follow) {
        if(!data) throw new Error('Users cannot be find')

        if(data.followedById === data.userId) throw new Error('Users cant follows he self')

        const follow = new Follow({followedById: data.followedById, userId: data.userId})

        await this.databaseFollowRepository.create(follow)
    }
}