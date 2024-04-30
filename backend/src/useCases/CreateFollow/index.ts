import { DatabaseFollowRepository } from "../../repositories/implemetations/DatabaseFollowRepository"
import { CreateFollowController } from "./CreateFollowController"
import { CreateFollowUseCase } from "./CreateFollowUseCase"

const databaseFollowRepository = new DatabaseFollowRepository()

const createFollowUseCase = new CreateFollowUseCase(
    databaseFollowRepository
)
const createFollowController = new CreateFollowController(
    createFollowUseCase
)

export { createFollowController, createFollowUseCase }