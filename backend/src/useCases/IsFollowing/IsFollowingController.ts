import { Request, Response } from "express"
import { IsFollowingUseCase } from "./IsFollowingUseCase"

export class IsFollowingController {
    constructor(
        private isFollowingUseCase: IsFollowingUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.user!    
        const { userId } = request.params

        try {
            const followValid = await this.isFollowingUseCase.execute({ followedById: Number(id), userId: Number(userId) })
            return response.status(200).send(followValid)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    } 
}