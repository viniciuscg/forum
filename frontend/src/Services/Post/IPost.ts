import { ILike } from "../Like/ILike"
import { IUser } from "../User/IUser"

export interface IPost {
  id: number
  title: string
  content?: string
  authorId: number
  parentId?: number
  createDate: string
  img?: string
  postStatus: boolean
  updatedDate: Date
  like?: ILike[]
  author: IUser
  parent?: IPost
  comments?: IPost[]
  comments_qtd: number
  likes_qtd: number
}

export interface ICreatePost {
  title?: string
  content?: string
  img?: string
  authorId: number
  parentId?: number | null
}
