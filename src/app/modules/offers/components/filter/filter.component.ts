import { Component } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterList: any = [{
    title: 'Sort by language',
    tags: ["Java", "JS", "TS", "C#", "C++", "C", "Python", "Ruby", "Dart", "Swift"]
    }, 
    {
      title: 'Sory by experiance',
      tags: ["No experience", "0-1", "1-3", "3-5", "5+"]
    }, 
    {
      title: 'Sort by location',
      tags: ["Remote", "Europe", "Asia", "Ocenia", "North America", "South America"]
    },
    {
      title: 'Sort by TOP company',
      tags: ["Intellians", "Genesis", "Sigma Software", "ZONE3000", "NI-IX", "ELEKS", "DataArt" ] 
    }
    ];
  expandedIndex = 0;
}
