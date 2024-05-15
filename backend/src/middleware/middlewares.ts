import { NextFunction, Request, Response } from "express"
import { IJwtokenProvider } from "../providers/IJwtokenProvider"
import { GetByIdUserUseCase } from "../useCases/GetByIdUser/GetByIdUserUseCases"
import { User } from "../entities/User"

declare global {
    namespace Express {
      interface Request {
        user: User | null,
      }
    }
  }

export class AuthMiddleware {
    constructor(
        private jwtokenProvider: IJwtokenProvider,
        private getByIdUserUseCase: GetByIdUserUseCase
    ) {}

    execute = async (request: Request, response: Response, next: NextFunction) => {
        const bearerToken = request.headers["authorization"]
        
        if (!bearerToken) throw new Error("Token it's not valid")

        const token = bearerToken.split(' ')[1]

        try {
            const tokenPayload = this.jwtokenProvider.verifyToken(token)

            if (!tokenPayload.id) throw new Error('Unexpected error.')

            const user = await this.getByIdUserUseCase.execute(tokenPayload.id);
            
            request.user = user
            
            next()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

}