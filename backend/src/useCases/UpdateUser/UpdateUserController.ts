import { Request, Response } from "express";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

export class UpdateUserController {
    constructor(
        private updateUserUseCases: UpdateUserUseCase
    ) {}
    
    execute = async (request: Request, response: Response): Promise<Response> => {
        const { email, password, img, name, bio, backgroundImg } = request.body
        const { id } = request.user!
        
        try {
            await this.updateUserUseCases.execute({id: Number(id), email, password, img, name, bio, backgroundImg})
            return response.status(204).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}