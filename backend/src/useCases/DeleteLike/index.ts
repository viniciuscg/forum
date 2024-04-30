import { DatabaseLikeRepository } from "../../repositories/implemetations/DatabaseLikeRepository";
import { DeleteLikeController } from "./DeleteLikeController";
import { DeleteLikeUseCase } from "./DeleteLikeUseCase";

const databaseLikeRepository = new DatabaseLikeRepository()

const deleteLikeUseCase = new DeleteLikeUseCase(
    databaseLikeRepository
)

const deleteLikeController = new DeleteLikeController(
    deleteLikeUseCase
)

export { deleteLikeController, deleteLikeUseCase }