import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {TextLinkComponent} from "../common/text-link/text-link.component";
const baseUrl = "auth"

const routes: Routes = [
  {
    path: '',
    redirectTo: `${baseUrl}/welcome`,
    pathMatch: "full",
  },
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
    WelcomeComponent,
    TextLinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AuthModule { }
