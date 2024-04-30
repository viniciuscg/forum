import { Request, Response } from "express";
import { GetAllPostsFromUserUseCase } from "./GetAllPostsFromUserUseCase";

export class GetAllPostsFromUserController {
    constructor(
        private getAllPostsFromUserUseCase: GetAllPostsFromUserUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { userId } = request.params
        const { page } = request.body

        try {
            await this.getAllPostsFromUserUseCase.execute({
                id: Number(userId),
                page,
            })
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }   
}