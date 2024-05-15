import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { GetPostsByStringController } from "./GetPostsByStringController";
import { GetPostsByStringUseCase } from "./GetPostsByStringUseCase";

const databasePostRepository = new DatabasePostsRepository()

const getPostsByStringUseCase = new GetPostsByStringUseCase(
  databasePostRepository
)

const getPostsByStringController = new GetPostsByStringController(
  getPostsByStringUseCase
)

export { getPostsByStringUseCase, getPostsByStringController }