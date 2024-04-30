import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { GetPostByIdController } from "./GetPostByIdController";
import { GetPostByIdUseCase } from "./GetPostByIdUseCase";

const databasePostRepository = new DatabasePostsRepository()

const getPostByIdUeCase = new GetPostByIdUseCase(
  databasePostRepository
)

const getPostByIdController = new GetPostByIdController(
  getPostByIdUeCase
)

export { getPostByIdController, getPostByIdUeCase }