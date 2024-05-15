import { IUser } from "../User/IUser"

export interface IFollow {
  id: number
  followedById: number
  userId: number
  followedBy: IUser
  following: IUser
}

export interface ICreateFollow {
  followedId: number
}