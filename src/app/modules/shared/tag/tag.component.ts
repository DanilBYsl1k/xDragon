import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { actionAddFilter, actionRemoveFilter } from 'app/modules/offers/store/action/filter.action';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent {
  @Input () title: string
  @Input () id: number
  @Input () action: string
  constructor(private store: Store){

  }
  addTag(){
    this.store.dispatch(actionAddFilter({tag: {
      title: this.title,
      id: Math.random() * 100
    }}))
    console.log(this.id)
  }
  removeTag(){
    this.store.dispatch(actionRemoveFilter({id: this.id}))
  }
}
