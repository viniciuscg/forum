import { IUsersrepository } from "../../repositories/IUsersRepository"

export class GetUsersByNameUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository,
    ) {}

    execute = async (name: string) => {
        if(!name) throw new Error('User is invalid')
        await this.databaseUserRepository.getUsersByName(name)
    }
}