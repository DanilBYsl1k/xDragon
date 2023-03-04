//Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Libraries
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';

//Components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {TextLinkComponent} from "../shared/text-link/text-link.component";

//Instruments
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducersAuth } from './store/reduce';
import { LoginEffect } from './store/effect/login.effect';
import { RegisterEffect } from './store/effect/register.effect';
import { AuthGuard } from './guards/auth.guard';

const baseUrl = "auth"

const routes: Routes = [
  {
    path: '',
    redirectTo: baseUrl,
    pathMatch: "full",
  },
  {
    path: 'auth',
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
        component: RegisterComponent,
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
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forFeature('auth',reducersAuth),
    EffectsModule.forFeature([LoginEffect, RegisterEffect]),
    BrowserAnimationsModule,
  ],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AuthModule { }
