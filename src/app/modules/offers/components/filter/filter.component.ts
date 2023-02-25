import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  items = ['Sort by language', 'Sory by experiance', 'Sort by location', 'Sort by company'];
  expandedIndex = 0;
}
