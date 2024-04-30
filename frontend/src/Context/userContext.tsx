import { ReactElement, createContext, useContext, useEffect, useState } from 'react'
import { UserServices } from '../Services/User/userServices'
import { IUser } from '../Services/User/IUser'

interface IUserContextProps {
  loggedUser: () => Promise<void>
  user: IUser | undefined
  isUserLogged: boolean
}

interface IProps {
  children: ReactElement
}

export const UserContext = createContext({} as IUserContextProps)

export const UserProvider = ({ children }: IProps) => {
  const [user, setUser] = useState<IUser>()
  const [isUserLogged, setIsUserLogged] = useState<boolean>(false)

  const loggedUser = async () => {
    const token = localStorage.getItem('token')
    const response = await UserServices.authUser(token)
    setUser(response)
    setIsUserLogged(true)
  }

  useEffect(() => {
    loggedUser()
  },[])

  return (
    <UserContext.Provider value={{
      loggedUser,
      user,
      isUserLogged
    }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)