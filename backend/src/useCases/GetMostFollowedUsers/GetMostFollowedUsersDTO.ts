export interface IMostFollowedUsersDTO{
  id: number;
  name: string;
  followedBy: {
      userId: number;
  }[];
}[]