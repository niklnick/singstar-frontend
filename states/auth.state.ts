import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Observable, tap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { AuthUser } from "src/app/models/auth-user.model";
import { User } from "src/app/models/user.nodel";
import { LogIn, LogOut, SignUp } from "./auth.actions";

export interface AuthStateModel {
    user: User | null;
    accessToken: string | null;
    refreshToken: string | null;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        user: null,
        accessToken: null,
        refreshToken: null
    }
})
@Injectable()
export class AuthState {
    @Selector()
    static user(authState: AuthStateModel): User | null {
        return authState.user;
    }

    @Selector()
    static accessToken(authState: AuthStateModel): string | null {
        return authState.accessToken;
    }

    @Selector()
    static refreshToken(authState: AuthStateModel): string | null {
        return authState.refreshToken;
    }

    constructor(private readonly authService: AuthService) { }

    @Action(SignUp)
    signUp(ctx: StateContext<AuthStateModel>, action: SignUp): Observable<AuthUser> {
        return this.authService.signUp(action.signupUser).pipe(
            tap((authUser: AuthUser) => ctx.setState(authUser))
        );
    }

    @Action(LogIn)
    logIn(ctx: StateContext<AuthStateModel>, action: LogIn): Observable<AuthUser> {
        return this.authService.logIn(action.loginUser).pipe(
            tap((authUser: AuthUser) => ctx.setState(authUser))
        );
    }

    @Action(LogOut)
    logOut(ctx: StateContext<AuthStateModel>): void {
        ctx.setState({
            user: null,
            accessToken: null,
            refreshToken: null
        });
    }
}
