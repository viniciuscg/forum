import { Follow } from "./Follow"
import { Like } from "./Like"
import { Post } from "./Post"

export class User {
    public readonly id?: number 

    public email: string 
    public name: string
    public password: string 
    public bio?: string | null
    public img?: string | null
    public backgroundImg?: string | null
    public followedBy?: Follow[]
    public following?: Follow[]
    public posts?: Post[]
    public like?: Like[]

    constructor(props: Omit<User, 'id'>) {
        this.email = props.email
        this.name = props.name
        this.password = props.password
        this.bio = props.bio
        this.img = props.img
        this.followedBy = props.followedBy
        this.following = props.following
        this.posts = props.posts
        this.like = props.like
        this.backgroundImg = props.backgroundImg
    }
}
