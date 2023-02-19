import { Component } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent {
  offers: number[] = [1,1,1,1,11,1,11,1,1,1,1,1,1,1,1]
}
