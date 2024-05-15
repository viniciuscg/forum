import { Request, Response } from "express";
import { DeleteLikeUseCase } from "./DeleteLikeUseCase";

export class DeleteLikeController {
    constructor(
        private deleteLikeUseCase: DeleteLikeUseCase
    ) {} 

    execute = async (request: Request, response: Response) => {
        const { id } = request.user!
        const { postId } = request.params

        try {
            await this.deleteLikeUseCase.execute({postId: Number(postId), userId: Number(id)})
            return response.status(200).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

}