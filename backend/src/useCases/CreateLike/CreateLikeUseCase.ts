import { ILikeRepository } from "../../repositories/ILikeRepository";
import { ICreateLikeDTO } from "./CreateLikeDTO";

export class CreateLikeUseCase {
    constructor(
        private databaseLikeRepository: ILikeRepository
    ) {}

    async execute(data: ICreateLikeDTO) {
        if(!data) throw new Error('Post is invalid')

        await this.databaseLikeRepository.create(data)
    }
}