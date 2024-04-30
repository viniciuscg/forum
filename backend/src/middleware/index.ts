import { JwtokenProvider } from "../providers/implemetations/JwtokenProvider"
import { DatabaseUsersRepository } from "../repositories/implemetations/DatabaseUsersRepository"
import { GetByIdUserUseCase } from "../useCases/GetByIdUser/GetByIdUserUseCases"
import { AuthMiddleware } from "./middlewares"

const jwtokenProvider = new JwtokenProvider()
const databaseUserRepository = new DatabaseUsersRepository()

const getByIdUserUseCase = new GetByIdUserUseCase(
    databaseUserRepository
)

const middleware = new AuthMiddleware(
    jwtokenProvider,
    getByIdUserUseCase
)

export { middleware }