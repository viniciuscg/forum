export class Follow {
    public readonly id?: number 
    public followedID: number
    public followerID: number

    constructor(props: Omit<Follow, 'id'>) {
        this.followedID = props.followedID
        this.followerID = props.followerID
    }
}