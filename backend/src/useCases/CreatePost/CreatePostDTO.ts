export interface ICreatePostDTO {
    title: string 
    img?: string | undefined
    content: string 
    authorId: number 
    parentId?: number
}
