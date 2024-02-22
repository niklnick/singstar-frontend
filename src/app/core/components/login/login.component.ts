import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { LogIn } from 'src/app/core/states/auth.actions';
import { LoginUser } from '../../models/login-user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  readonly loginForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  logIn(loginUser: LoginUser): void {
    this.store.dispatch(new LogIn(loginUser)).subscribe(() => this.router.navigate(['dashboard']));
  }
}
