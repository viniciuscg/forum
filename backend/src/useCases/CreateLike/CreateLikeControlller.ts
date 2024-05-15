import { Request, Response } from "express";
import { CreateLikeUseCase } from "./CreateLikeUseCase";

export class CreateLikeController {
    constructor(
        private createLikeUseCase: CreateLikeUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { postId, userId } = request.body
    
        try {
            await this.createLikeUseCase.execute({postId, userId})
            return response.status(200).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }

    }
}