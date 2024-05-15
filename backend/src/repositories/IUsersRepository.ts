import { User } from "../entities/User"
import { IMostFollowedUsersDTO } from "../useCases/GetMostFollowedUsers/GetMostFollowedUsersDTO"

export interface IUsersrepository {
    findByEmail(email: string): Promise<User | null>
    save(user: User): Promise<void>
    update(user: IUpdateUserRequestDTO): Promise<void>
    getById(id: number): Promise<User | null>
    delete(id: number): Promise<User | null>
    getUsersByName(name: string): Promise<User[]>
    getUsers(ids: number[]): Promise<User[]>
    getUsersWithFollowers(): Promise<IMostFollowedUsersDTO[]>
}