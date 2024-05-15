import { Request, Response } from "express";
import { CreatePostUseCase } from "./CreatePostUseCase";

export class CreatePostController {
    constructor(
        private createPostUseCase: CreatePostUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.user!
        
        const { title, img, content, parentId } = request.body
        
        try {
            await this.createPostUseCase.execute({ 
                title, 
                img, 
                content, 
                authorId: Number(id), 
                parentId,
            })
            return response.status(201).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
        
    }   
}   