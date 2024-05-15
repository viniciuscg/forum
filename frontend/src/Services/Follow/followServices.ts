import api from "../api";

export class FollowServices {
  static async create(followed: number) {
    const token = localStorage.getItem('token')
    await api.post('/follow', { followedId: followed }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  static async isFollowing(userId: number) {
    const token = localStorage.getItem('token')
    const response = await api.get(`/follow/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })

    return response.data
  }

  static async deleteFollow(followedId: number) {
    const token = localStorage.getItem('token')
    await api.delete(`/follow/${followedId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
}
