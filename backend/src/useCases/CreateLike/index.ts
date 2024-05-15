import { DatabaseLikeRepository } from "../../repositories/implemetations/DatabaseLikeRepository";
import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { CreateLikeController } from "./CreateLikeControlller";
import { CreateLikeUseCase } from "./CreateLikeUseCase";

const databaseLikeRepository = new DatabaseLikeRepository()
const databasePostRepository = new DatabasePostsRepository()

const createLikeUseCase = new CreateLikeUseCase(
    databaseLikeRepository,
    databasePostRepository
)

const createLikeController = new CreateLikeController(
    createLikeUseCase
)

export { createLikeUseCase, createLikeController }