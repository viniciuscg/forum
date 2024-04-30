import api from "../api";
import { IJwtoken, IUserCreate, IUserLogin } from "./IUser";

export class UserServices {
  static async authUser(token: string | null) {
    console.log(token);
    const response = await api.get('/users', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }

  static async getById(id: number) {
    const response = await api.get(`/users/${id}`)
    return response.data
  }

  static async create(data: IUserCreate) {
    await api.post('/users', data)
  }

  static async login(data: IUserLogin) {
    const response = await api.post<IJwtoken>('/users/login', data)
    console.log(response.data.token);
    localStorage.setItem('token', response.data.token)
    const teste = localStorage.getItem('token')
    console.log("teste", teste);
  }
}