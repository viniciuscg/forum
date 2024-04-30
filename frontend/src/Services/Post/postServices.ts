import api from "../api";
import { IPost } from "./IPost";

export class PostServices {
  static async getAll(page: number) {
    const response = await api.get<IPost[]>(`/posts?page=${page}`)
    return response.data
  }

  static async getById(id: number) {
    const response = await api.get<IPost>(`/posts/${id}`)
    return response.data
  }
}
