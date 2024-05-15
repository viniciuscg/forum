import { IUsersrepository } from "../../repositories/IUsersRepository"

export class GetUsersByNameUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository,
    ) {}

    execute = async (name: string) => {
        if(!name) throw new Error('User is invalid')
            
        const findUsers = await this.databaseUserRepository.getUsersByName(name)

        if (!findUsers) throw new Error("Cannot find any users")
        
        const users = findUsers.map(user => 
            user.password = ""
        )

        return users
    }
}