import { Request, Response } from "express";
import { GetByIdUserUseCase } from "./GetByIdUserUseCases";

export class GetByIdUserControlller {
    constructor(
        private getByIdUserUseCase: GetByIdUserUseCase
    ) {}

    execute = async (request: Request, response: Response) => {
        const { id } = request.params

        try {
            const user = await this.getByIdUserUseCase.execute(Number(id))
            return response.status(200).send(user)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    } 
}