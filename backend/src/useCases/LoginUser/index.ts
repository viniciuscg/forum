import { JwtokenProvider } from "../../providers/implemetations/JwtokenProvider";
import { DatabaseUsersRepository } from "../../repositories/implemetations/DatabaseUsersRepository";
import { LoginUserController } from "./LoginUserController";
import { LoginUserUseCase } from "./LoginUserUseCase";

const databaseUserRepository = new DatabaseUsersRepository()
const jwtokenProvider = new JwtokenProvider()

const loginUserUseCase = new LoginUserUseCase(
    databaseUserRepository,
    jwtokenProvider,
)

const loginUserController = new LoginUserController(
    loginUserUseCase
)

export { loginUserController, loginUserUseCase }