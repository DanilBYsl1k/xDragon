import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import { SearchComponent } from './search/search.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    SearchComponent,
    UserPanelComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    SearchComponent,
    UserPanelComponent
  ]
})
export class SharedModule { }
