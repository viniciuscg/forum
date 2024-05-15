import { Request, Response } from "express";
import { GetAllPostByFollowingUseCase } from "./GetAllByFollowingPostUseCase";

export class GetAllPostByFollowingController {
    constructor(
        private getAllPostByFollowingUseCase: GetAllPostByFollowingUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.user!
        try {
            const posts = await this.getAllPostByFollowingUseCase.execute({id: Number(id)})
            return response.status(200).send(posts)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }  
}
