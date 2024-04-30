import { Like } from "../Like/ILike"
import { IUser } from "../User/IUser"

export interface IPost {
  id: number
  title: string
  content: string
  authorId: number
  parentId?: number
  createDate: string
  img: string
  postStatus: boolean
  updatedDate: Date
  likes?: Like[]
  author: IUser
  parent?: IPost
  comments?: IPost[]
}