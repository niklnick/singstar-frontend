import { LoginUser } from "src/app/models/login-user.model";
import { SignupUser } from "src/app/models/signup-user.model";

export class SignUp {
    static readonly type: string = '[Auth] Sign Up';

    constructor(public readonly signupUser: SignupUser) { }
}

export class LogIn {
    static readonly type: string = '[Auth] Log In';

    constructor(public readonly loginUser: LoginUser) { }
}

export class LogOut {
    static readonly type: string = '[Auth] Log Out';
}
