import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { GetAllPostController } from "./GetAllPostController";
import { GetAllPostUseCase } from "./GetAllPostUseCase";

const databasePostRepository = new DatabasePostsRepository()

const getAllPostUseCase = new GetAllPostUseCase(
  databasePostRepository
)

const getAllPostController = new GetAllPostController(
  getAllPostUseCase
)

export { getAllPostController, getAllPostUseCase }