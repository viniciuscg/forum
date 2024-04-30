import { DatabaseUsersRepository } from "../../repositories/implemetations/DatabaseUsersRepository";
import { GetByIdUserControlller } from "./GetByIdUserController";
import { GetByIdUserUseCase } from "./GetByIdUserUseCases";

const databaseUserRepository = new DatabaseUsersRepository()

const getByIdUserUseCase = new GetByIdUserUseCase(
    databaseUserRepository
)

const getByIdUserControlller = new GetByIdUserControlller(
    getByIdUserUseCase
)

export { getByIdUserUseCase, getByIdUserControlller }