import { IFollow } from "../Follow/IFollow"
import { ILike } from "../Like/ILike"
import { IPost } from "../Post/IPost"

export interface IUser {
  id: number 
  email: string 
  name: string
  password: string 
  bio?: string
  img?: string
  backgroundImg?: string
  followedBy?: IFollow[]
  following?: IFollow[]
  posts?: IPost[]
  like?: ILike[]
}

export interface IUserUpdate {
  email?: string
  name?: string
  password?: string
  bio?: string
  img?: string
  backgroundImg?: string
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