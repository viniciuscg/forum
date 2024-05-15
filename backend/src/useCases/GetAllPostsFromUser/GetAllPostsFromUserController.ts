import { Request, Response } from "express";
import { GetAllPostsFromUserUseCase } from "./GetAllPostsFromUserUseCase";

export class GetAllPostsFromUserController {
    constructor(
        private getAllPostsFromUserUseCase: GetAllPostsFromUserUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { userId } = request.params

        try {
            const posts = await this.getAllPostsFromUserUseCase.execute({
                id: Number(userId),
            })
            return response.status(200).send(posts)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }   
}