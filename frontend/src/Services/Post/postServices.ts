import api from "../api";
import { ICreatePost, IPost } from "./IPost";

export class PostServices {
  static async getAll() {
    const response = await api.get<IPost[]>(`/posts`)
    return response.data
  }

  static async getById(id: number) {
    const response = await api.get<IPost>(`/posts/${id}`)
    return response.data
  }

  static async getPostsFromUser(id: number) {
    const response = await api.get<IPost[]>(`/posts/user/${id}`)
    return response.data
  }

  static async create(data: ICreatePost) {
    const token = localStorage.getItem('token')
    await api.post('/posts', data, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
  
  static async getPostsByFollowing() {
    const token = localStorage.getItem('token')
    const response = await api.get<IPost[]>('/posts/foryou', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })    
    return response.data
  }

  static async getPostsThatUserLiked(id: number) {
    const response = await api.get<IPost[]>(`/posts/user/liked/${id}`)
    return response.data
  }

  static async getTopLikedPosts() {
    const response = await api.get<IPost[]>(`/posts/topliked`)
    return response.data
  }

  static async getPostsByString(name: string) {
    const response = await api.get<IPost[]>(`/posts/search/${name}`)
    return response.data
  }
}
