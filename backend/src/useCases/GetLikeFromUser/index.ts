import { DatabaseLikeRepository } from "../../repositories/implemetations/DatabaseLikeRepository";
import { GetLikeFromUserController } from "./GetLikeFromUserController";
import { GetLikeFromUserUseCase } from "./GetLikeFromUserUseCase";

const databaseLikeRepository = new DatabaseLikeRepository()

const getLikeFromUserUseCase = new GetLikeFromUserUseCase(
    databaseLikeRepository
)

const getLikeFromUserController = new GetLikeFromUserController(
    getLikeFromUserUseCase
)

export { getLikeFromUserController, getLikeFromUserUseCase }