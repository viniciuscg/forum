import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { DeletePostController } from "./DeletePostController";
import { DeletePostUseCase } from "./DeletePostUseCase";

const databasePostRepository = new DatabasePostsRepository()

const deletePostUseCase = new DeletePostUseCase(
    databasePostRepository
)

const deletePostController = new DeletePostController(
    deletePostUseCase
)

export { deletePostUseCase, deletePostController }
