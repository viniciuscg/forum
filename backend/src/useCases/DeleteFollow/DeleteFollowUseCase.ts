import { Follow } from "../../entities/Follow";
import { IFollowRepository } from "../../repositories/IFollowRepository";

export class DeleteFollowUseCase {
    constructor(
        private databaseFollowRepository: IFollowRepository
    ) {}

    async execute(data: Follow){
        if(!data) throw new Error('User is invalid')

        await this.databaseFollowRepository.delete(data)
    }
}