import { Like } from "../../entities/Like";
import { ILikeRepository } from "../../repositories/ILikeRepository";

export class GetLikeFromUserUseCase {
    constructor(
        private databaseLikeRepository: ILikeRepository,
    ) {}

    async execute (data: Like) {
      if(!data) throw new Error("Invalid like")

      const like = this.databaseLikeRepository.exist(data)

      return like
    }
}