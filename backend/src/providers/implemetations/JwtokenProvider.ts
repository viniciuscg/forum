import { IJwtoken, IJwtokenProvider } from "../IJwtokenProvider";
import jwt, { JwtPayload } from 'jsonwebtoken';

export class JwtokenProvider implements IJwtokenProvider {
    createToken(userID: number): IJwtoken {
        const token = jwt.sign({ id: userID }, "mysecret", {
            expiresIn: 21600
        });

        if (!token) {
            throw new Error('Failed to create token');
        }

        return { token }
    }

    verifyToken(token: string): JwtPayload & { id: number } {
        const verify = jwt.verify(token , "mysecret")
        
        return verify as JwtPayload & { id: number }
    }
}