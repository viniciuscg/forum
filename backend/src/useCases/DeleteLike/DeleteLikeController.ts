import { Request, Response } from "express";
import { DeleteLikeUseCase } from "./DeleteLikeUseCase";

export class DeleteLikeController {
    constructor(
        private deleteLikeUseCase: DeleteLikeUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { postId } = request.body

        try {
            await this.deleteLikeUseCase.execute(postId)
            return response.status(200).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }

}