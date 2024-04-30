import { IPostRepository } from "../../repositories/IPostRepository";

export class GetAllPostsFromUserUseCase {
    constructor(
        private databasePostRepository: IPostRepository
    ) {}

    async execute(data: IGetAllPostsFromUserDTO) {
        if(!data) throw new Error("Invalid User")
        
        await this.databasePostRepository.getAllByUser(data)
    }
}