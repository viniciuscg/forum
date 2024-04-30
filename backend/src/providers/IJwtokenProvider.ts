import { JwtPayload } from "jsonwebtoken"

export interface IJwtoken {
    token: string
}

export interface IJwtokenProvider {
    createToken(userID: number): IJwtoken
    verifyToken(token: string): JwtPayload & {id: number} 
}