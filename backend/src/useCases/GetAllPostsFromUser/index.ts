import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { GetAllPostsFromUserController } from "./GetAllPostsFromUserController";
import { GetAllPostsFromUserUseCase } from "./GetAllPostsFromUserUseCase";

const databasePostRepository = new DatabasePostsRepository()

const getAllPostsFromUserUseCase = new GetAllPostsFromUserUseCase(
    databasePostRepository
)

const getAllPostsFromUserController = new GetAllPostsFromUserController(
    getAllPostsFromUserUseCase
)

export { getAllPostsFromUserController , getAllPostsFromUserUseCase }