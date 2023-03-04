//Core
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { SearchComponent } from './search/search.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

//Material
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import { TagComponent } from './tag/tag.component';

@NgModule({
  declarations: [
    SearchComponent,
    UserPanelComponent,
    TagComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatIconModule
  ],
  exports: [
    SearchComponent,
    UserPanelComponent,
    TagComponent
  ]
})
export class SharedModule { }
