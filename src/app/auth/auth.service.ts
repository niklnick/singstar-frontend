import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { AuthUser } from './models/auth-user.model';
import { LoginUser } from './models/login-user.model';
import { SignupUser } from './models/signup-user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly baseUrl: string = environment.apiUrl + '/auth';

  constructor(private readonly httpClient: HttpClient) { }

  signUp(signupUser: SignupUser): Observable<AuthUser> {
    return this.httpClient.post<AuthUser>(this.baseUrl + '/signup', signupUser);
  }

  logIn(loginUser: LoginUser): Observable<AuthUser> {
    return this.httpClient.post<AuthUser>(this.baseUrl + '/login', loginUser);
  }

  refresh(): Observable<AuthUser> {
    return this.httpClient.get<AuthUser>(this.baseUrl + '/refresh');
  }
}
