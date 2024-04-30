import { DatabaseUsersRepository } from "../../repositories/implemetations/DatabaseUsersRepository";
import { DeleteUserController } from "./DeleteUserController";
import { DeleteUserUseCase } from "./DeleteUserUseCase";

const databaseUserRepository = new DatabaseUsersRepository()

const deleteUserUseCase = new DeleteUserUseCase(
    databaseUserRepository,
)

const deleteUserController = new DeleteUserController(
    deleteUserUseCase
)

export { deleteUserController, deleteUserUseCase }