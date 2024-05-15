import api from "../api";
import { ICreateLike } from "./ILike";

export class LikeServices {
  static async create(data: ICreateLike) {
    const token = localStorage.getItem('token')
    await api.post('/like', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  static async delete(postId: number) {
    const token = localStorage.getItem('token')
    await api.delete(`/like/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  static async get(postId: number) {
    const token = localStorage.getItem('token')
    const response = await api.get(`/like/${postId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
}
