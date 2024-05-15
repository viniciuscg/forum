import { IUsersrepository } from "../../repositories/IUsersRepository";

export class GetMostFollowedUsersUseCase {
    constructor(
        private databaseUserRepository: IUsersrepository
    ) {}

    execute = async () => {
      const users = await this.databaseUserRepository.getUsersWithFollowers()

      const userCounts = new Map<number, number>();

      users.forEach((user) => {
        user.followedBy.forEach((follow) => {
          const userId = follow.userId
          userCounts.set(userId, (userCounts.get(userId) || 0) + 1)
        })
      })

      const sortedUserCounts = Array.from(userCounts.entries()).sort((a, b) => b[1] - a[1])
      const top10UserIds = sortedUserCounts.slice(0, 10).map((entry) => entry[0])

      const mostFollowedUsers = await this.databaseUserRepository.getUsers(top10UserIds)

      return mostFollowedUsers
    }
}