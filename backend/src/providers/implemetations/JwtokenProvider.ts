import { IJwtoken, IJwtokenProvider } from "../IJwtokenProvider";
import jwt, { JwtPayload } from 'jsonwebtoken';

export class JwtokenProvider implements IJwtokenProvider {
    createToken(userID: number): IJwtoken {
        const token = jwt.sign({ id: userID }, "mysecret")

        return { token }
    }

    verifyToken(token: string): JwtPayload & { id: number } {
        const verify = jwt.verify(token , "mysecret")
        
        return verify as JwtPayload & { id: number }
    }
    
    deleteToken(token: string): JwtPayload & { id: number } {
        const verify = jwt.verify(token , "mysecret")
        
        return verify as JwtPayload & { id: number }
    }
}