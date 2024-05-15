import { Follow } from "../../entities/Follow"
import { IFollowRepository } from "../../repositories/IFollowRepository"

export class IsFollowingUseCase {
  constructor(
      private databaseFollowRepository: IFollowRepository
  ) {}

  async execute(data: Follow) {
    try {
      await this.databaseFollowRepository.isFollowing({followedById: data.followedById, userId: data.userId})
      return true
    } catch (error: any) {
      return false
    }
  } 
}