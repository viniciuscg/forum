import { Request, Response } from "express";
import { GetAllPostUseCase } from "./GetAllPostUseCase";

export class GetAllPostController {
    constructor(
      private getAllPostUseCase: GetAllPostUseCase
    ) {}

    execute = async (request: Request, response: Response) => {

      try {
          const posts = await this.getAllPostUseCase.execute()
          return response.status(200).json(posts)
      } catch (error: any) {
          return response.status(400).json({
              message: error.message || 'Unexpected error.'
          })
      }
    }  
}
