import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { UpdatePostController } from "./UpdatePostController";
import { UpdatePostUseCase } from "./UpdatePostUseCase";

const databasePostRepository = new DatabasePostsRepository()

const updatePostUseCase = new UpdatePostUseCase(
    databasePostRepository
)

const updatePostController = new UpdatePostController(
    updatePostUseCase
)

export { updatePostController, updatePostUseCase }