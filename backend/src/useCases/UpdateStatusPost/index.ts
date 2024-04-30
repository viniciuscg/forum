import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { UpdatePostController } from "../UpdatePost/UpdatePostController";
import { UpdatePostUseCase } from "../UpdatePost/UpdatePostUseCase";

const databasePostRepository = new DatabasePostsRepository()

const updateStatusPostUseCase = new UpdatePostUseCase(
    databasePostRepository
)

const updateStatusPostController = new UpdatePostController(
    updateStatusPostUseCase
)

export { updateStatusPostController, updateStatusPostUseCase }