import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LogOut } from 'src/app/core/states/auth.actions';
import { AuthState } from 'src/app/core/states/auth.state';
import { User } from '../../../core/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  readonly user$: Observable<User | null>;

  constructor(private readonly store: Store) {
    this.user$ = this.store.select<User | null>(AuthState.user);
  }

  logOut(): void {
    this.store.dispatch(LogOut);
  }
}
