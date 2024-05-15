import api from "../api";
import { IJwtoken, IUser, IUserCreate, IUserLogin, IUserUpdate } from "./IUser";

export class UserServices {
  static async authUser(token: string | null) {
    const response = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }

  static async getById(id: number) {
    const response = await api.get<IUser>(`/users/${id}`)
    return response.data
  }

  static async create(data: IUserCreate) {
    await api.post('/users', data)
  }

  static async login(data: IUserLogin) {
    const response = await api.post<IJwtoken>('/users/login', data)
    localStorage.setItem('token', response.data.token)
  }

  static async update(data: IUserUpdate) {
    const token = localStorage.getItem('token')
    await api.put('/users', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  static async getMostFollowedUsers() {
    const response = await api.get<IUser[]>('/most-followed')
    return response.data
  }

  static async getUsersByName(name: string) {
    const response = await api.get<IUser[]>(`/search-name/${name}`)
    return response.data
  }
}