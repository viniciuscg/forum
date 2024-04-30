import { Request, Response } from "express";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

export class DeleteUserController{
    constructor(
        private deleteUserUseCase: DeleteUserUseCase
    ) {}
    
    execute = async (request: Request, response: Response) => {
        const { id } = request.params
        
        try {
            await this.deleteUserUseCase.execute(Number(id))
            return response.status(200).send()
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}