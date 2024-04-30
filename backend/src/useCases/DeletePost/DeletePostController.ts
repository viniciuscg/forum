import { Request, Response } from "express";
import { DeletePostUseCase } from "./DeletePostUseCase";

export class DeletePostController {
    constructor(
        private deletePostUseCase: DeletePostUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            await this.deletePostUseCase.execute(Number(id))
            return response.status(200).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}