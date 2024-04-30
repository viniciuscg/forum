import { JwtokenProvider } from "../../providers/implemetations/JwtokenProvider";
import { DatabaseUsersRepository } from "../../repositories/implemetations/DatabaseUsersRepository";
import { UpdateUserController } from "./UpdateUserController";
import { UpdateUserUseCase } from "./UpdateUserUseCase";

const databaseUserRepository = new DatabaseUsersRepository()

const updateUserUseCase = new UpdateUserUseCase(
    databaseUserRepository,
)

const updateUserController = new UpdateUserController(
    updateUserUseCase
)

export { updateUserController, updateUserUseCase }