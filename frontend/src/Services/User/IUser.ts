import { IPost } from "../Post/IPost"

export interface IUser {
  id: number
  email: string
  name: string
  password: string
  bio: string
  img: string
  followed: []
  following: []
  posts: IPost[]
  like: number
}

export interface IUserCreate {
  email: string
  name: string
  password: string
}

export interface IUserLogin {
  email: string
  password: string
}

export interface IJwtoken {
  token: string
}