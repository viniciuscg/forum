import { AuthMiddleware } from "../../middleware/middlewares";
import { JwtokenProvider } from "../../providers/implemetations/JwtokenProvider";
import { GetLoggedUserController } from "./GetLoggedUserController";
import { GetLoggedUserUseCase } from "./GetLoggedUserUseCase";

const jwtokenProvider = new JwtokenProvider()

const getLoggedUserUseCase = new GetLoggedUserUseCase(
    jwtokenProvider,
)

const getLoggedUserController = new GetLoggedUserController(
    getLoggedUserUseCase
)

export { getLoggedUserController, getLoggedUserUseCase }