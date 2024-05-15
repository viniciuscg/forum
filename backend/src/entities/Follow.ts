import { User } from "./User"

export class Follow {
    public readonly id?: number 
    public followedById: number
    public userId: number
    public followedBy?: User
    public user?: User

    constructor(props: Omit<Follow, 'id'>) {
        this.followedById = props.followedById
        this.userId = props.userId
        this.followedBy = props.followedBy
        this.user = props.user
    }
}