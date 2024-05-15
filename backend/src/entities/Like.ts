import { Post, User } from "@prisma/client"

export class Like {
    public readonly id?: number 
    public userId: number
    public postId: number
    public post?: Post 
    public user?: User

    constructor(props: Omit<Like, 'id'>) {
        this.userId = props.userId
        this.postId = props.postId
        this.post = props.post
        this.user = props.user
    }
}