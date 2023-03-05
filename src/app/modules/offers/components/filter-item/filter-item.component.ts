import { Component, Input } from '@angular/core';
import { IFilter } from '../../types/filter.interface';

@Component({
  selector: 'app-filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss']
})
export class FilterItemComponent {
    items = ['Sort by language', 'Sory by experiance', 'Sort by location', 'Sort by company'];

    @Input () data: any
    @Input () id: number
}
