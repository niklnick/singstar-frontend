import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthUser } from '../models/auth-user.model';
import { LoginUser } from '../models/login-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly loginForm: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  logIn(loginUser: LoginUser): void {
    this.authService.logIn(loginUser).subscribe((authUser: AuthUser) => {
      console.log(authUser);
    });
  }
}
