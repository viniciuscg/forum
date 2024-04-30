import { IUsersrepository } from "../../repositories/IUsersRepository";

export class GetByIdUserUseCase {
    constructor (
        private databaseUserRepository: IUsersrepository
    ) {}

    async execute(id: number) {
        if(!id) throw new Error("Invalid user")
        return await this.databaseUserRepository.getById(id)
    }
}