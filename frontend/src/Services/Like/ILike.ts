import { IPost } from "../Post/IPost"
import { IUser } from "../User/IUser"

export interface ILike {
  id?: number
  userId: number
  postId: number
  post?: IPost
  user?: IUser
}

export interface ICreateLike {
  postId: number
  userId: number
}