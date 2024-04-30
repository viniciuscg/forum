import { IJwtokenProvider } from "../../providers/IJwtokenProvider";
import { IUsersrepository } from "../../repositories/IUsersRepository";

export class LoginUserUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository,
        private jwtokenProvider: IJwtokenProvider
    ) {}

    async execute(data: ILoginUserRequestDTO) {
        if(!data) throw new Error("Invalid fields")
        const user = await this.databaseUserRepository.login(data)

        if(user) {
            const token = this.jwtokenProvider.createToken(user.id!)
            return token
        }else {
            throw new Error('User may not exist')
        }
    }
}