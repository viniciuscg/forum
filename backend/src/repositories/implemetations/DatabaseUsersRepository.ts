import { PrismaClient } from "@prisma/client";
import { User } from "../../entities/User";
import { IUsersrepository } from "../IUsersRepository";

export class DatabaseUsersRepository implements IUsersrepository {
    private prisma = new PrismaClient()
    
    async findByEmail(email: string) {
        const user = await this.prisma.user.findFirst({
            where: {
                email
            }
        })

        return user as User | null
    }

    async save(user: User) {
        await this.prisma.user.create({
            data: {
                email: user.email,
                password: user.password,
                name: user.name,
                bio: '',
                img: '',
            }
        })
    }

    async login(user: ILoginUserRequestDTO) {
        const findUser =  await this.prisma.user.findFirstOrThrow({
            where: {
                email: user.email,
                password: user.password
            }
        })

        return findUser 
    }

    async update(user: IUpdateUserRequestDTO) {
        await this.prisma.user.update({
            where: {
                id: user.id
            },
            data: {
                id: user.id,
                email: user.email,
                password: user.password,
                name: user.name,
                bio: user.bio,
                img: user.img,
            }
        })
    }

    async getById(id: number) {
        const user = await this.prisma.user.findFirst({
            where: {
                id,
            }
        })

        return user
    }

    async delete(id: number) {
        const user = await this.prisma.user.delete({
            where: {
                id,
            }
        })

        return user
    }

    async getUsersByName(name: string) {
        return await this.prisma.user.findMany({
            where: {
                name: {
                    contains: name
                }
            }
        })
    }   
}