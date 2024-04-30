import { IFollowRepository } from "../../repositories/IFollowRepository";

export class DeleteFollowUseCase {
    constructor(
        private databaseFollowRepository: IFollowRepository
    ) {}

    async execute(id: number){
        if(!id) throw new Error('User is invalid')

        await this.databaseFollowRepository.delete(id)
    }
}