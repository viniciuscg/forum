import { IPost } from "../Post/IPost"
import { IUser } from "../User/IUser"

export interface Like {
  id: number
  userId: number
  postId: number
  post: IPost
  user: IUser
}