import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

export class CreateUserController {
    constructor(
        private createUserUseCases: CreateUserUseCase
    ) {}

    execute = async (request: Request, response: Response): Promise<Response> => {
        const { name, email, password } = request.body

        try {
            const data = await this.createUserUseCases.execute({
                name,
                email,
                password,
            })

            return response.status(201).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}