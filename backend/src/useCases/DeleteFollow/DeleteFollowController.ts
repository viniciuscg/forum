import { Request, Response } from "express";
import { DeleteFollowUseCase } from "./DeleteFollowUseCase";

export class DeleteFollowController {
    constructor(
        private deleteFollowUseCase: DeleteFollowUseCase
    ) {}

    execute = async (request: Request, response: Response) => {   
        const { id } = request.user!
        const { followedId } = request.params

        try {
            await this.deleteFollowUseCase.execute({ userId: Number(followedId), followedById: Number(id) })
            return response.status(200).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}