import { DatabaseLikeRepository } from "../../repositories/implemetations/DatabaseLikeRepository";
import { CreateLikeController } from "./CreateLikeControlller";
import { CreateLikeUseCase } from "./CreateLikeUseCase";

const databaseLikeRepository = new DatabaseLikeRepository()

const createLikeUseCase = new CreateLikeUseCase(
    databaseLikeRepository
)

const createLikeController = new CreateLikeController(
    createLikeUseCase
)

export { createLikeUseCase, createLikeController }