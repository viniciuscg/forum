import { DatabaseLikeRepository } from "../../repositories/implemetations/DatabaseLikeRepository";
import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { GetAllPostsThatUserLikedController } from "./GetAllPostsFromUserController";
import { GetAllPostsThatUserLikedUseCase } from "./GetAllPostsFromUserUseCase";

const databaseLikeRepository = new DatabaseLikeRepository()

const getAllPostsThatUserLikedUseCase = new GetAllPostsThatUserLikedUseCase(
    databaseLikeRepository
)

const getAllPostsThatUserLikedController = new GetAllPostsThatUserLikedController(
    getAllPostsThatUserLikedUseCase
)

export { getAllPostsThatUserLikedController , getAllPostsThatUserLikedUseCase }