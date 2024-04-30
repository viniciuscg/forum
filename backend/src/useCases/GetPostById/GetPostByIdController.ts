import { Request, Response } from "express";
import { GetPostByIdUseCase } from "./GetPostByIdUseCase";

export class GetPostByIdController {
  constructor(
    private getPostByIdUseCase: GetPostByIdUseCase
  ) {}

  execute = async (request: Request, response: Response) => {
    const { id } = request.params

    try {
      const post = await this.getPostByIdUseCase.execute(Number(id))
      return response.status(200).send(post)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}