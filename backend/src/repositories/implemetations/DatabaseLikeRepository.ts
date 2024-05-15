import { PrismaClient } from "@prisma/client";
import { ILikeRepository } from "../ILikeRepository";
import { Like } from "../../entities/Like";

export class DatabaseLikeRepository implements ILikeRepository{
    private prisma = new PrismaClient()
    
    async create(data: Like) {
        await this.prisma.like.create({
            data: {
                userId: data.userId,
                postId: data.postId
            },
        })
    }

    async exist(data: Like) {
        const liked = await this.prisma.like.findFirst({
            where: {
                userId: data.userId,
                postId: data.postId
            }
        })
        
        if(liked) {
            return true
        }else {
            return false
        }
    }

    async delete(data: IDeleteLikeDTO) {
        await this.prisma.like.delete({
            where: {
                userId_postId: {
                    postId: data.postId,
                    userId: data.userId,
                }
            }
        })
    }

    async getAllThatUserLiked(id: number): Promise<Like[]> {
        const likedPosts = await this.prisma.like.findMany({
            where: { 
                userId: id 
            },
            include: { 
                post: {
                    include: {
                        author: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                                password: false,
                                img: true,
                                backgroundimg: true
                            }
                        },
                        like: true,
                        comments: {
                            include: {
                                author: true,
                                like: true
                            }
                        },
                        parent: {
                            include: {
                                author: {
                                    select: {
                                        id: true,
                                        name: true,
                                        email: true,
                                        password: false,
                                    }
                                },
                                comments: true,
                                like: true
                            }
                        }
                    },
                } 
            },
        })
        return likedPosts
    }
}