import { DatabaseUsersRepository } from "../../repositories/implemetations/DatabaseUsersRepository";
import { GetMostFollowedUsersController } from "./GetMostFollowedUsersController";
import { GetMostFollowedUsersUseCase } from "./GetMostFollowedUsersUseCase";

const databaseUserRepository = new DatabaseUsersRepository()

const getMostFollowedUsersUseCase = new GetMostFollowedUsersUseCase(
    databaseUserRepository
)

const getMostFollowedUsersController = new GetMostFollowedUsersController(
    getMostFollowedUsersUseCase
)

export { getMostFollowedUsersUseCase, getMostFollowedUsersController }