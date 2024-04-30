import { Request, Response } from "express";
import { CreateLikeUseCase } from "./CreateLikeUseCase";

export class CreateLikeController {
    constructor(
        private createLikeUseCase: CreateLikeUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.user!
        const { postId } = request.body
    
        try {
            await this.createLikeUseCase.execute({id: Number(id), postId})
            
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }
}