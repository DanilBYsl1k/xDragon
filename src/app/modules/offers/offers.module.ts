//Libraries
import { RouterModule, Routes } from '@angular/router';

//Meterial
import { MatIconModule } from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {CdkAccordionModule} from '@angular/cdk/accordion';

//Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Instruments
import { OfferGuard } from './guard/offer.guard';

//Components
import { SharedModule } from '../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { OffersListComponent } from './components/offers-list/offers-list.component';
import { HomeComponent } from './components/home/home.component';
import { FilterComponent } from './components/filter/filter.component';
import { MenuComponent } from './components/menu/menu.component';
import { FilterItemComponent } from './components/filter-item/filter-item.component';
import { OfferItemComponent } from './components/offer-item/offer-item.component';

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
    FilterItemComponent,
    OfferItemComponent,
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
