import { IUsersrepository } from "../../repositories/IUsersRepository";

export class UpdateUserUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository,
    ) {}

    async execute(data: IUpdateUserRequestDTO) {
        if(!data) throw new Error("Invalid fields")

        await this.databaseUserRepository.update(data)
    }
}