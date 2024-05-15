import { DatabaseFollowRepository } from "../../repositories/implemetations/DatabaseFollowRepository";
import { IsFollowingController } from "./IsFollowingController";
import { IsFollowingUseCase } from "./IsFollowingUseCase";

const databaseFollowRepository = new DatabaseFollowRepository() 

const isFollowingUseCase = new IsFollowingUseCase(
  databaseFollowRepository
)

const isFollowingController = new IsFollowingController(
  isFollowingUseCase
)

export { isFollowingController, isFollowingUseCase} 