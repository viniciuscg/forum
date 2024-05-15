import { IJwtokenProvider } from "../../providers/IJwtokenProvider";
import { IUsersrepository } from "../../repositories/IUsersRepository";
import bcrypt from 'bcrypt'

export class LoginUserUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository,
        private jwtokenProvider: IJwtokenProvider
    ) {}

    async execute(data: ILoginUserRequestDTO) {
        if(!data) throw new Error("Invalid fields")

        const findUser = await this.databaseUserRepository.findByEmail(data.email)

        if (!findUser) throw new Error("User cannot be find")
        
        const isMatch = await bcrypt.compare(data.password, findUser.password)
        
        if (!isMatch) throw new Error("invalid password")

        const token = this.jwtokenProvider.createToken(findUser.id!)
        
        return token
    }
}