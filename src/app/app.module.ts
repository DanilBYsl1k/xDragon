//Core
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, isDevMode } from '@angular/core';

//Modules
import { AuthModule } from './modules/auth/auth.module';
import { EffectsModule } from '@ngrx/effects';
import { OffersModule } from './modules/offers/offers.module'; 

//Material 
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

//Libraries
import { ToastrModule } from 'ngx-toastr';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([]),
    BrowserAnimationsModule,
    AuthModule,
    MatIconModule,
    HttpClientModule,
    OffersModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
