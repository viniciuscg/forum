import { DatabaseLikeRepository } from "../../repositories/implemetations/DatabaseLikeRepository";
import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { DeleteLikeController } from "./DeleteLikeController";
import { DeleteLikeUseCase } from "./DeleteLikeUseCase";

const databaseLikeRepository = new DatabaseLikeRepository()
const databasePostRepository = new DatabasePostsRepository()

const deleteLikeUseCase = new DeleteLikeUseCase(
    databaseLikeRepository,
    databasePostRepository
)

const deleteLikeController = new DeleteLikeController(
    deleteLikeUseCase
)

export { deleteLikeController, deleteLikeUseCase }