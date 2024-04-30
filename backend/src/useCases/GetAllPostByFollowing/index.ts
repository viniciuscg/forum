import { DatabaseFollowRepository } from "../../repositories/implemetations/DatabaseFollowRepository";
import { DatabasePostsRepository } from "../../repositories/implemetations/DatabasePostsRepository";
import { GetAllPostByFollowingController } from "./GetAllByFollowingPostController";
import { GetAllPostByFollowingUseCase } from "./GetAllByFollowingPostUseCase";

const databasePostRepository = new DatabasePostsRepository()

const databaseFollowrepository = new DatabaseFollowRepository()

const getAllByFollowingUseCase = new GetAllPostByFollowingUseCase(
    databasePostRepository,
    databaseFollowrepository,
)

const getAllByFollowingPostController = new GetAllPostByFollowingController(
    getAllByFollowingUseCase
)

export { getAllByFollowingUseCase, getAllByFollowingPostController }