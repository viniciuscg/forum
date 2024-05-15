import { User } from "../../entities/User";
import { IUsersrepository } from "../../repositories/IUsersRepository";
import bcrypt from 'bcrypt'

export class CreateUserUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository
    ) {}
    
    async execute(data: User) {
        const userAlreadyExist = await this.databaseUserRepository.findByEmail(data.email)
        if (userAlreadyExist) throw new Error('User already exist.')
            
        const {email, name, password } = data

        const passwordCrypt = await bcrypt.hash(password, 10)

        const user = new User({
            email,
            name,
            password: passwordCrypt
        })

        await this.databaseUserRepository.save(user)
    }
}