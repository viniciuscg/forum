import { DatabaseUsersRepository } from "../../repositories/implemetations/DatabaseUsersRepository";
import { GetUsersByNameController } from "./GetUsersByNameController";
import { GetUsersByNameUseCase } from "./GetUsersByNameUseCase";

const databaseUserRepository = new DatabaseUsersRepository()

const getUsersByNameUseCase = new GetUsersByNameUseCase(
    databaseUserRepository,
)

const getUsersByNameController = new GetUsersByNameController(
    getUsersByNameUseCase
)

export { getUsersByNameController, getUsersByNameUseCase }