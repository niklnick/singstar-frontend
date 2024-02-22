import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { SignUp } from 'src/app/states/auth.actions';
import { SignupUser } from '../../models/signup-user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  readonly signupForm: FormGroup;

  constructor(
    private readonly router: Router,
    private readonly store: Store
  ) {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.email),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signUp(signupUser: SignupUser): void {
    this.store.dispatch(new SignUp(signupUser)).subscribe(() => this.router.navigate(['dashboard']));
  }
}
