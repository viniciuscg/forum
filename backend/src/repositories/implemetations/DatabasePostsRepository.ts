import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "../IPostRepository";
import { ICreatePostDTO } from "../../useCases/CreatePost/CreatePostDTO";
import { IGetAllPostsByFollowingDataDTO } from "../../useCases/GetAllPostByFollowing/GetAllByFollowingDTO";
import { Post } from "../../entities/Post";

export class DatabasePostsRepository implements IPostRepository {
    private prisma = new PrismaClient()

    async save(data: ICreatePostDTO) {
        const { title, img, content, authorId, parentId } = data
        await this.prisma.post.create({
            data: {
                title, 
                img, 
                content, 
                authorId, 
                parentId, 
                createDate: new Date(), 
                post_status: true
            }
        })
    }
    
    async update(data: IUpdatePostDTO) {
        const { title, img, content, id } = data
        await this.prisma.post.update({
            where: {
                id,
            },
            data: {
                content,
                img,
                updatedDate: new Date(),
                title,
            }
        })
    }

    async delete(id: number) {
        await this.prisma.post.delete({
            where: {
                id
            }
        })
    }

    async updateStatus(data: IUpdateStatusDTO) {
        await this.prisma.post.update({
            where: {
                id: data.id
            },
            data: {
                post_status: data.postStatus
            }
        })
    }

    async getAllByUser(data: IGetAllPostsFromUserDTO) {
        const page = (data.page - 1) * 10
        const posts = await this.prisma.post.findMany({
            skip: page,
            take: 10,
            where: { 
                authorId: data.id
            },
        })
        return posts as unknown as Promise<Post[]>;
    }

    async getByUsers(data: IGetAllPostsByFollowingDataDTO) {
        const page = (data.page - 1) * 10
        const posts = await this.prisma.post.findFirst({
            skip: page,
            take: 10,
            where: { 
                authorId: {
                    in: data.ids
                }
            },
        })
        return posts as unknown as Promise<Post[]>;
    }

    async getAll(page: number) {
        const pageLogic = (page - 1) * 10
        const posts = await this.prisma.post.findMany({
            skip: pageLogic,
            take: 10,
            where: {
                parentId: null
            },
            include: {
                author: true,
                like: true,
                comments: {
                    include: {
                        author: true,
                        like: true
                    }
                },
            }
        })
        return posts as unknown as Promise<Post[]>;
    }

    async getById(id: number) {
        const post = await this.prisma.post.findFirst({
            where: {
                id,
            },
            include: {
                author: true,
                like: true,
                comments: true,
            }
        })
        return post as unknown as Promise<Post>;
    }
}
