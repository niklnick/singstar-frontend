import { User } from "src/app/core/models/user.model";

export interface AuthUser {
    readonly user: User;
    readonly accessToken: string;
    readonly refreshToken: string;
}
