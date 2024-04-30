import { PrismaClient } from "@prisma/client";
import { ICreateLikeDTO } from "../../useCases/CreateLike/CreateLikeDTO";
import { ILikeRepository } from "../ILikeRepository";

export class DatabaseLikeRepository implements ILikeRepository{
    private prisma = new PrismaClient()
    
    async create(data: ICreateLikeDTO) {
        await this.prisma.like.create({
            data: {
                userId: data.id,
                postId: data.postId
            }
        })
    }

    async delete(postId: number) {
        await this.prisma.like.delete({
            where: {
                postId
            }
        })
    }
}