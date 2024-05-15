import { PrismaClient } from "@prisma/client";
import { IFollowRepository } from "../IFollowRepository";
import { Follow } from "../../entities/Follow";

export class DatabaseFollowRepository implements IFollowRepository {
    private prisma = new PrismaClient()

    async create(data: Follow){
        const { followedById, userId } = data
        await this.prisma.follows.create({
            data: {
                followedById: followedById,
                userId: userId,
            }
        })
    }

    async isFollowing(data: Follow) {
        const follow = await this.prisma.follows.findFirstOrThrow({
            where: {
                followedById: data.followedById,
                userId: data.userId,
            },
        });

        return follow as unknown as Promise<Follow>;
    }

    async delete(data: Follow) {
        await this.prisma.follows.delete({
            where: {
                userId_followedById: {
                    followedById: data.followedById,
                    userId: data.userId,
                }
            }
        })
    }

    async getAllFollows(id: number) {
        const follows = await this.prisma.follows.findMany({
            where: {
                followedById: id
            }
        })

        return follows
    }


}