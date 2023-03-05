import { Component } from '@angular/core';
import * as uniqId from 'uniqid'
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  filterList: any = {
    list: [
      {
        kind: "Search by languages",
        tags: [
          {
            title: "Java",
            id: uniqId()
          },
          {
            title: "C#/.NET",
            id: uniqId()
          },
          {
            title: "JS",
            id: uniqId()
          },
          {
            title: "TS",
            id: uniqId()
          },
          {
            title: "Python",
            id: uniqId()
          },
          {
            title: "C++",
            id: uniqId()
          },
          {
            title: "C",
            id: uniqId()
          },
          {
            title: "Swift",
            id: uniqId()
          },
          {
            title: "Dart",
            id: uniqId()
          },
          {
            title: "PHP",
            id: uniqId()
          },
        ]
      },
      {
        kind: "Search by experiance",
        tags: [
          {
            title: "No experience",
            id: uniqId()
          },
          {
            title: "0-1",
            id: uniqId()
          },
          {
            title: "1-3",
            id: uniqId()
          },
          {
            title: "3-5",
            id: uniqId()
          },
          {
            title: "5+",
            id: uniqId()
          },
        ]
      },
      {
        kind: "Sort by location",
        tags: [
          {
            title: "Remote",
            id: uniqId()
          },
          {
            title: "Europe",
            id: uniqId()
          },
          {
            title: "Asia",
            id: uniqId()
          },
          {
            title: "Ocenia",
            id: uniqId()
          },
          {
            title: "North America",
            id: uniqId()
          },
          {
            title: "South America",
            id: uniqId()
          },
        ]
      },
      {
        kind: "Search by TOP company",
        tags: [
          {
            title: "Intellians",
            id: uniqId()
          },
          {
            title: "Genesis",
            id: uniqId()
          },
          {
            title: "Sigma Software",
            id: uniqId()
          },
          {
            title: "ZONE3000",
            id: uniqId()
          },
          {
            title: "NI-IX",
            id: uniqId()
          },
          {
            title: "ELEKS",
            id: uniqId()
          },
        ]
      },
    ]
    }
}
