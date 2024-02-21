import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthUser } from '../models/auth-user.model';
import { SignupUser } from '../models/signup-user.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  readonly signupForm: FormGroup;

  constructor(private readonly authService: AuthService) {
    this.signupForm = new FormGroup({
      email: new FormControl('', Validators.email),
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }

  signUp(signupUser: SignupUser): void {
    this.authService.signUp(signupUser).subscribe((authUser: AuthUser) => {
      console.log(authUser);
    });
  }
}
