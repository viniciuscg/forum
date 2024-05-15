import { Request, Response } from "express";
import { GetAllPostsThatUserLikedUseCase } from "./GetAllPostsFromUserUseCase";

export class GetAllPostsThatUserLikedController {
    constructor(
        private getAllPostsThatUserLikedUseCase: GetAllPostsThatUserLikedUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { userId } = request.params

        try {
            const posts = await this.getAllPostsThatUserLikedUseCase.execute(Number(userId))
            return response.status(200).send(posts)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }   
}