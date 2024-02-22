import { User } from "src/app/models/user.nodel";

export interface AuthUser {
    readonly user: User;
    readonly accessToken: string;
    readonly refreshToken: string;
}
