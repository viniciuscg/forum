import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "../IPostRepository";
import { IGetAllPostsByFollowingDataDTO } from "../../useCases/GetAllPostByFollowing/GetAllByFollowingDTO";
import { Post } from "../../entities/Post";

export class DatabasePostsRepository implements IPostRepository {
    private prisma = new PrismaClient()

    async save(data: Post) {
        const { title, img, content, authorId, parentId, createDate, post_status  } = data
        
        await this.prisma.post.create({
            data: {
                title, 
                img, 
                content, 
                authorId, 
                parentId, 
                createDate,
                post_status: post_status,
                likes_qtd: 0,
                comments_qtd: 0,
            }
        })
    }
    
    async update(data: IUpdatePostDTO) {
        const { title, img, content, id, comments_qtd, likes_qtd } = data
        await this.prisma.post.update({
            where: {
                id,
            },
            data: {
                content,
                img,
                updatedDate: new Date(),
                title,
                comments_qtd,
                likes_qtd,
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
        const posts = await this.prisma.post.findMany({
            where: { 
                authorId: data.id
            },
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
                }
            },
        })
        
        return posts as unknown as Promise<Post[]>;
    }
    

    async getByUsers(data: IGetAllPostsByFollowingDataDTO) {
        const posts = await this.prisma.post.findMany({
            where: { 
                authorId: {
                    in: data.ids
                },
            },
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
            }
        })

        return posts as unknown as Promise<Post[]>;
    }

    async getAll() {
        const posts = await this.prisma.post.findMany({
            where: {
                parentId: null
            },
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
            
        })

        return post as unknown as Promise<Post>;
    }

    async getTopLikedPosts() {
        const posts = await this.prisma.post.findMany({
            take: 10, 
            orderBy: {
                likes_qtd: 'desc', 
            },
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
        })

        return posts as unknown as Promise<Post[]>;
    }

    async getByName (name: string) {
        const posts = await this.prisma.post.findMany({
            where: { 
                OR: [
                    { content: { equals: name } },
                    { title: { equals: name } }
                ]
            },
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
            }
        })

        return posts as unknown as Promise<Post[]>;
    }
}
