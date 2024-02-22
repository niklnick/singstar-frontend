import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from 'src/app/core/states/auth.state';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/login/login.component';
import { SignupComponent } from './core/components/signup/signup.component';
import { TracksComponent } from './features/tracks/components/tracks/tracks.component';
import { HeaderComponent } from './layout/header/header.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    TracksComponent,
    HeaderComponent,
    DashboardComponent
  ],
  imports: [
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    NgxsStoragePluginModule.forRoot({
      key: ['auth.user', 'auth.accessToken', 'auth.refreshToken']
    }),
    NgxsModule.forRoot([AuthState]),
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
