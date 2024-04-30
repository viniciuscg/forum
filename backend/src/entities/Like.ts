export class Like {
    public readonly id?: number 
    public userId: number
    public postId: number

    constructor(props: Omit<Like, 'id'>) {
        this.userId = props.userId
        this.postId = props.postId
    }
}