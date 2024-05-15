import { Request, Response } from "express";
import { GetMostFollowedUsersUseCase } from "./GetMostFollowedUsersUseCase";

export class GetMostFollowedUsersController {
  constructor(
    private getMostFollowedUsersUseCase: GetMostFollowedUsersUseCase
  ) {}

  execute = async (request: Request, response: Response) => {   
    try {
      const users = await this.getMostFollowedUsersUseCase.execute()
      return response.status(200).send(users)
    } catch (error: any) {
      return response.status(400).json({
        message: error.message || 'Unexpected error.'
      })
    }
  }
}