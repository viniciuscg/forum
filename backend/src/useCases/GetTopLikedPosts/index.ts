import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { GetTopLikedPostsController } from "./GetTopLikedPostsController";
import { GetTopLikedPostsUseCase } from "./GetTopLikedPostsUseCase";

const databasePostRepository = new DatabasePostsRepository()

const getTopLikedPostsUseCase = new GetTopLikedPostsUseCase(
  databasePostRepository
)

const getTopLikedPostsController = new GetTopLikedPostsController(
  getTopLikedPostsUseCase
)

export { getTopLikedPostsController, getTopLikedPostsUseCase }