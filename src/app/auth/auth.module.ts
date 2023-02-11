import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './welcome/welcome.component';
import {MatIconModule} from '@angular/material/icon';

const baseUrl = "auth"

const routes: Routes = [
  {
    path: baseUrl,
    component: DashboardComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatIconModule
  ],
  exports: [RouterModule]
})
export class AuthModule { }
