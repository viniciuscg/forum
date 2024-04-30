import { User } from "../../entities/User";
import { IUsersrepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository
    ) {}
    
    async execute(data: ICreateUserRequestDTO) {
        const userAlreadyExist = await this.databaseUserRepository.findByEmail(data.email)

        if (userAlreadyExist) throw new Error('User already exist.')
        
        const user = new User(data)

        await this.databaseUserRepository.save(user)
    }
}