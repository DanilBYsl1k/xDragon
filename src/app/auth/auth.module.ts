import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducersAuth } from './store/reduce';
import { EffectsModule } from '@ngrx/effects';
const baseUrl = "auth"

const routes: Routes = [
  {
    path: baseUrl,
    component: DashboardComponent,
    children: [
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
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forFeature('auth',reducersAuth),
    EffectsModule.forFeature([])
  ],
  exports: [RouterModule]
})
export class AuthModule { }
