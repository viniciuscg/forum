import { DatabaseFollowRepository } from "../../repositories/implemetations/DatabaseFollowRepository";
import { DeleteFollowController } from "./DeleteFollowController";
import { DeleteFollowUseCase } from "./DeleteFollowUseCase";

const databaseFollowRepository = new DatabaseFollowRepository()

const deleteFollowUseCase = new DeleteFollowUseCase(
    databaseFollowRepository
)

const deleteFollowController = new DeleteFollowController(
    deleteFollowUseCase
)

export { deleteFollowController, deleteFollowUseCase }