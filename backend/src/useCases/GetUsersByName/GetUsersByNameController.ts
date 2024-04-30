import { Request, Response } from "express";
import { GetUsersByNameUseCase } from "./GetUsersByNameUseCase";

export class GetUsersByNameController {
    constructor(
        private getUsersByNameUseCase: GetUsersByNameUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { name } = request.body

        try {
            const users = await this.getUsersByNameUseCase.execute(name)
            return response.status(200).send(name)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}