import { PrismaClient } from "@prisma/client";
import { IFollowRepository } from "../IFollowRepository";
import { ICreateFollowDTO } from "../../useCases/CreateFollow/CreateFollowDTO";

export class DatabaseFollowRepository implements IFollowRepository {
    private prisma = new PrismaClient()
    
    async getAllFollowing(id: number) {
        return await this.prisma.follow.findMany({
            where: {
                followerID: id
            },
            select: {
                followedID: true
            }
        })
    }

    async create(data: ICreateFollowDTO){
        await this.prisma.follow.create({
            data: {
                followedID: data.followedId,
                followerID: data.id
            }
        })
    }

    async delete(id: number) {
        await this.prisma.follow.delete({
            where: {
                id,
            }
        })
    }
}