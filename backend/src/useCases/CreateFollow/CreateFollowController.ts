import { Request, Response } from "express";
import { CreateFollowUseCase } from "./CreateFollowUseCase";

export class CreateFollowController {
    constructor(
        private createFollowUseCase: CreateFollowUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.user!
        const { followedId } = request.body

        try {
            await this.createFollowUseCase.execute({userId: followedId, followedById: Number(id)})
            return response.status(201).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}