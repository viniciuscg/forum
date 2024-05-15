import { Request, Response } from "express";
import { GetPostsByStringUseCase } from "./GetPostsByStringUseCase";

export class GetPostsByStringController {
  constructor(
    private getPostsByStringUseCase: GetPostsByStringUseCase
  ) {}

  execute = async (request: Request, response: Response) => {
    const { name } = request.params
    
    try {
      const posts = await this.getPostsByStringUseCase.execute(name)
      return response.status(200).send(posts)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}