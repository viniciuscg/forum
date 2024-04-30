import { IPostRepository } from "../../repositories/IPostRepository";

export class UpdateStatusPostUseCase {
    constructor(
        private databasePostRepository: IPostRepository
    ) {}

    async execute(data: IUpdateStatusDTO) {
        if(data === null) throw new Error("Post status not defined")
        
        await this.databasePostRepository.updateStatus(data)
    }
}