import { Request, Response } from "express";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

export class UpdatePostController {
    constructor(
        private updatePostUseCase: UpdatePostUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.params
        const { title, img, content } = request.body
        
        try {
            await this.updatePostUseCase.execute({
                id: Number(id),
                title,
                img,
                content
            })
            return response.status(204).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}