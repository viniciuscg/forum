import { CreatePostController } from "./CreatePostController"
import { DatabasePostsRepository } from '../../repositories/implemetations/DatabasePostsRepository';
import { CreatePostUseCase } from './CreatePostUseCase';

const databasePostsRepository = new DatabasePostsRepository()

const createPostUseCase = new CreatePostUseCase(
    databasePostsRepository
)
const createPostController = new CreatePostController(
    createPostUseCase
)

export { createPostController, createPostUseCase }