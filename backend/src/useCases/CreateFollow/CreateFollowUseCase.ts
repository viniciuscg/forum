import { IFollowRepository } from "../../repositories/IFollowRepository";
import { ICreateFollowDTO } from "./CreateFollowDTO";

export class CreateFollowUseCase {
    constructor(
        private databaseFollowRepository: IFollowRepository
    ) {}

    async execute(data: ICreateFollowDTO) {
        if(!data) throw new Error('Users cannot be find')

        await this.databaseFollowRepository.create(data)
    }
}