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
                backgroundimg: '',
            }
        })
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
                backgroundimg: user.backgroundImg,
            }
        })
    }

    async getUsers(ids: []) {
        const users = await this.prisma.user.findMany({
            where: {
                id: {
                    in: ids
                }
            },
            include: {
                followedBy: {
                    include: {
                        following: true
                    }
                },
                following: {
                    include: {
                        followedBy: true
                    }
                },
                like: true,
              },
        })
        return users
    } 

    async getById(id: number) {
        const user = await this.prisma.user.findFirst({
          where: {
            id,
          },
          include: {
            followedBy: {
                include: {
                    following: true
                }
            },
            following: {
                include: {
                    followedBy: true
                }
            },
            like: true,
            posts: true
          },
        });
    
        return user as User | null
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

    async getUsersWithFollowers() {
        const users = await this.prisma.user.findMany({
            select: {
              id: true,
              name: true,
              followedBy: {
                select: {
                  userId: true,
                },
              },
            },
        })    
        return users
    }   
}