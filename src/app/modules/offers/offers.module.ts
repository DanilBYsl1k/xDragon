import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './components/menu/menu.component';
import { MatIconModule } from '@angular/material/icon';
import { FilterComponent } from './components/filter/filter.component';
import { HomeComponent } from './components/home/home.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import {MatInputModule} from '@angular/material/input';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { OfferGuard } from './guard/offer.guard';
const baseUrl = "offers"
const routes: Routes = [
  {
    path: baseUrl,
    redirectTo: `${baseUrl}/dashboard/home`
  },
  {
    path: `${baseUrl}/dashboard`,
    component: DashboardComponent,
    canActivate:[OfferGuard],
    children: [
      {
        path: 'home',
        component: HomeComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    HeaderComponent,
    MenuComponent,
    FilterComponent,
    HomeComponent,
    OffersListComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule,
    MatIconModule,
    MatInputModule,
    CdkAccordionModule
  ]
})
export class OffersModule { }
