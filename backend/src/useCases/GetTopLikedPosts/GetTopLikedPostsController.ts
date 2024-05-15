import { Request, Response } from "express";
import { GetTopLikedPostsUseCase } from "./GetTopLikedPostsUseCase";

export class GetTopLikedPostsController {
  constructor(
    private getTopLikedPostsUseCase: GetTopLikedPostsUseCase
  ) {}

  execute = async (request: Request, response: Response) => {
    try {
      const posts = await this.getTopLikedPostsUseCase.execute()
      return response.status(200).send(posts)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}