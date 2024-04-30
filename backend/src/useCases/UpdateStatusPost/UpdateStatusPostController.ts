import { Request, Response } from "express";
import { UpdateStatusPostUseCase } from "./UpdateStatusPostUseCases";

export class UpdateStatusPostController {
    constructor(
        private updateStatusPostUseCase: UpdateStatusPostUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.params
        const { postStatus } = request.body

        try {
            await this.updateStatusPostUseCase.execute({
                id: Number(id), 
                postStatus
            })
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}