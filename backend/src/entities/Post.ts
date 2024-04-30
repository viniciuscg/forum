import { Like } from "./Like"
import { User } from "./User"

export class Post {
    public readonly id?: number 

    public title: string 
    public img?: string
    public content: string 
    public authorId: number 
    public parentId?: number
    public createDate: Date
    public updatedDate?: Date
    public postStatus: boolean
    public like?: Like[]
    public author: User
    public comments: Post[]
 
    constructor(props: Omit<Post, 'id'>) {
        this.title = props.title
        this.img = props.img
        this.content = props.content
        this.createDate = props.createDate
        this.updatedDate = props.updatedDate
        this.postStatus = props.postStatus
        this.authorId = props.authorId
        this.parentId = props.parentId
        this.like = props.like
        this.author = props.author
        this.comments = props.comments
    }
}