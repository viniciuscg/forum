import { Like } from "./Like"
import { User } from "./User"

export class Post {
    public readonly id?: number 
    public title: string 
    public img?: string 
    public content: string 
    public authorId: number 
    public parentId?: number | null
    public createDate: Date
    public updatedDate?: Date | null
    public post_status: boolean 
    public like?: Like[]
    public author?: User
    public comments?: Post[]
    public comments_qtd: number 
    public likes_qtd: number 

    constructor(props: Omit<Post, 'id'>) {
        this.title = props.title
        this.img = props.img
        this.content = props.content
        this.createDate = props.createDate
        this.updatedDate = props.updatedDate
        this.post_status = props.post_status
        this.authorId = props.authorId
        this.parentId = props.parentId
        this.like = props.like
        this.author = props.author
        this.comments = props.comments
        this.likes_qtd = props.likes_qtd
        this.comments_qtd = props.comments_qtd
    }
}