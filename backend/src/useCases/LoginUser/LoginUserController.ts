import { Request, Response } from "express";
import { LoginUserUseCase } from "./LoginUserUseCase";

export class LoginUserController {
    constructor(
        private loginUserUseCases: LoginUserUseCase
    ) {}

    execute = async (request: Request, response: Response): Promise<Response> => {
        const { email, password } = request.body

        try {
            const token = await this.loginUserUseCases.execute({email, password})

            return response.status(200).send(token)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}