import { Request, Response } from "express";
import { GetLikeFromUserUseCase } from "./GetLikeFromUserUseCase";

export class GetLikeFromUserController {
  constructor(
    private getLikeFromUserUseCase: GetLikeFromUserUseCase
  ) {}

  execute = async (request: Request, response: Response) => {
    const { id } = request.user!
    const { postId } = request.params

    try {
      const liked = await this.getLikeFromUserUseCase.execute({userId: Number(id), postId: Number(postId)})
      return response.status(200).send(liked)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}