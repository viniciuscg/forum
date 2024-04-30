import { Request, Response } from "express";
import { IUsersrepository } from "../../repositories/IUsersRepository";

export class DeleteUserUseCase{
    constructor(
        private databaseUserRepository: IUsersrepository
    ) {}
    
    async execute(id: number) {
        const user = await this.databaseUserRepository.delete(id)

        if(!user) throw new Error("User cannot be deleted");
    }
}