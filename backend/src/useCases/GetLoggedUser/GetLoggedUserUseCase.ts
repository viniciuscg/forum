import { IJwtokenProvider } from "../../providers/IJwtokenProvider";

export class GetLoggedUserUseCase {
    constructor(
        private jwtokenProvider: IJwtokenProvider
    ) {}

    execute(token: string) {
        const verifyToken = this.jwtokenProvider.verifyToken(token)
        
        if (!verifyToken) throw new Error("User is not logged")     
        
        return verifyToken
    }
}