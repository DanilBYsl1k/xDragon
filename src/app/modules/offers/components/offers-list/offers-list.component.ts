import { Component } from '@angular/core';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.scss']
})
export class OffersListComponent {
  offers: any[] = [
    {
      title: ".NET Infrastructure Developer",
      description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects. The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects. The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects. The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
      benefits: ["Remote", "Medical insurance", "High salary", "Remote", "Medical insurance", "High salary"],
      company: {
        logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
        name: "Luxoft"
      }
    },
    {
      title: ".NET Infrastructure Developer",
      description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
      benefits: ["Remote", "Medical insurance", "High salary"],
      company: {
        logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
        name: "Luxoft"
      }
    },
    {
      title: ".NET Infrastructure Developer",
      description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
      benefits: ["Remote", "Medical insurance", "High salary"],
      company: {
        logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
        name: "Luxoft"
      }
    },
    {
      title: ".NET Infrastructure Developer",
      description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
      benefits: ["Remote", "Medical insurance", "High salary"],
      company: {
        logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
        name: "Luxoft"
      }
    },
    {
      title: ".NET Infrastructure Developer",
      description: "The .NET infrastructure developer is responsible for the development and maintenance of several legacy C#/.NET applications used by the company. The majority of these are back-end infrastructure projects",
      benefits: ["Remote", "Medical insurance", "High salary"],
      company: {
        logo: "https://p.djinni.co/42/17074426e5f3bbad15ec7c6e08dbc4/Luxoft_Purple_RGB_400.png",
        name: "Luxoft"
      }
    }
  ]

  formateDescription(desc: string){
    if (desc.length > 250) return desc.substring(0,250) + `...`

    return desc
  }
}
