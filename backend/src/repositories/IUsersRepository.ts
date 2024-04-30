import { User } from "../entities/User"

export interface IUsersrepository {
    findByEmail(email: string): Promise<User | null>
    save(user: User): Promise<void>
    login(user: ILoginUserRequestDTO): Promise<User>
    update(user: IUpdateUserRequestDTO): Promise<void>
    getById(id: number): Promise<User | null>
    delete(id: number): Promise<User | null>
    getUsersByName(name: string): Promise<User[]>
}