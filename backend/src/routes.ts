import { NextFunction, Request, Response, Router, response } from "express";
import { createUserController } from "./useCases/CreateUser";
import { loginUserController } from "./useCases/LoginUser";
import { updateUserController } from "./useCases/UpdateUser";
import { deleteUserController } from "./useCases/DeleteUser";
import { getLoggedUserController } from "./useCases/GetLoggedUser/indext";
import { middleware } from "./middleware";
import { createPostController } from "./useCases/CreatePost";
import { getByIdUserControlller } from "./useCases/GetByIdUser";
import { updatePostController } from "./useCases/UpdatePost";
import { deletePostController } from "./useCases/DeletePost";
import { updateStatusPostController } from "./useCases/UpdateStatusPost";
import { getAllPostsFromUserController } from "./useCases/GetAllPostsFromUser";
import { getAllByFollowingPostController } from "./useCases/GetAllPostByFollowing";
import { getUsersByNameController } from "./useCases/GetUsersByName";
import { createFollowController } from "./useCases/CreateFollow";
import { createLikeController } from "./useCases/CreateLike";
import { deleteFollowController } from "./useCases/DeleteFollow";
import { deleteLikeController } from "./useCases/DeleteLike";
import { getAllPostController } from "./useCases/GetAllPost";
import { getPostByIdController } from "./useCases/GetPostById";

const router = Router()

router.post('/users', createUserController.execute)

router.post('/users/login', loginUserController.execute)

router.put('/users/:id', middleware.execute, updateUserController.execute)

router.get('/users', middleware.execute, getLoggedUserController.execute)

router.get('/users/:id', getByIdUserControlller.execute)

router.delete('/users/:id', middleware.execute, deleteUserController.execute)

router.delete('/users/logout', middleware.execute, deleteUserController.execute)

router.get('/users/search-name', middleware.execute, getUsersByNameController.execute)


router.post('/posts', middleware.execute, createPostController.execute )

router.put('/posts/:id', middleware.execute, updatePostController.execute)

router.put('/posts/status/:id', middleware.execute, updateStatusPostController.execute)

router.delete('/posts/:id', middleware.execute, deletePostController.execute)

router.get('/posts/user/:userId', getAllPostsFromUserController.execute)

router.get('/posts/foryou', middleware.execute, getAllByFollowingPostController.execute)

router.get('/posts', getAllPostController.execute)

router.get('/posts/:id', getPostByIdController.execute)


router.post('/follow', middleware.execute, createFollowController.execute)

router.delete('/follow', middleware.execute, deleteFollowController.execute)


router.post('/like', middleware.execute, createLikeController.execute)

router.delete('/like', middleware.execute, deleteLikeController.execute)


export { router }