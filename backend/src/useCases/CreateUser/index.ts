import { DatabaseUsersRepository } from "../../repositories/implemetations/DatabaseUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const databaseUserRepository = new DatabaseUsersRepository()

const createUserUseCase = new CreateUserUseCase(
    databaseUserRepository,
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserController, createUserUseCase }