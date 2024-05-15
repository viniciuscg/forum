import { ReactElement, createContext, useContext, useState } from 'react'
import { UserServices } from '../Services/User/userServices'
import { IUser } from '../Services/User/IUser'
import { FollowServices } from '../Services/Follow/followServices'

interface IUserContextProps {
  loggedUser: () => Promise<void>
  isFollowingVerify: (followedId: number) => Promise<void>
  user: IUser | undefined
  isUserLogged: boolean
  isFollowing: boolean
}

interface IProps {
  children: ReactElement
}

export const UserContext = createContext({} as IUserContextProps)

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>()
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)
  const [isFollowing, setIsFollowing] = useState<boolean>(false)

  const loggedUser = async () => {
    const token = localStorage.getItem('token')
    const response = await UserServices.authUser(token)
    const user = await UserServices.getById(response.id)
    setUser(user)
    setIsUserLogged(true)
  }

  const isFollowingVerify = async (userId: number) => {
    const response = await FollowServices.isFollowing(userId)
    setIsFollowing(response)
  }

  return (
    <UserContext.Provider value={{
      loggedUser,
      user,
      isUserLogged,
      isFollowingVerify,
      isFollowing,
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)