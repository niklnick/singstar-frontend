import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { TracksComponent } from './features/tracks/components/tracks/tracks.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'tracks',
    component: TracksComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
