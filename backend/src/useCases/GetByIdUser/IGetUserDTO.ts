import { Follow } from "../../entities/Follow"
import { Like } from "../../entities/Like"
import { Post } from "../../entities/Post"

export interface IGetUserDTO{
  id: number 
  email: string 
  name: string
  password: string 
  bio?: string | null
  img?: string | null
  backgroundImg?: string | null
  followedBy?: Follow[]
  following?: Follow[]
  posts?: Post[]
  like?: Like[]
}