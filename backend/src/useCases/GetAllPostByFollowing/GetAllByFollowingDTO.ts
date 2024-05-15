export interface IGetAllPostsByFollowingDTO {
    id: number; 
    title: string; 
    content: string; 
    authorId: number; 
    parentId: number | null; 
    createDate: Date;
    img: string | null; 
    post_status: boolean; 
    updatedDate: Date | null;
}

export interface IGetAllPostsByFollowingCaseDTO {
    id: number
}

export interface IGetAllPostsByFollowingDataDTO {
    ids: number[] 
}