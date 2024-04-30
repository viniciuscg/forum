import { NextFunction, Request, Response } from "express";
import { GetLoggedUserUseCase } from "./GetLoggedUserUseCase";

export class GetLoggedUserController {
    constructor(
        private getLoggedUserUseCase: GetLoggedUserUseCase
    ) {}

    execute = async (request: Request, response: Response, next: NextFunction) => {
        const token  = request.headers["authorization"]

        try {
            const verifyToken = this.getLoggedUserUseCase.execute(token!.split(" ")[1])
            return response.status(200).send(verifyToken)
        } catch (error: any) {
            return response.status(400).json({
                message: error.message || 'Unexpected error.'
            })
        }
    }
}