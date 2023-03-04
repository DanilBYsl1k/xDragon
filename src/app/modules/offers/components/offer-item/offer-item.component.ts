import { Component, Input } from '@angular/core';
import { IOffer } from '../../types/offer.interface';

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.scss']
})
export class OfferItemComponent {
  @Input () offer: IOffer

  formateDescription(desc: string){
    if (desc.length > 250) return desc.substring(0,250) + `...`

    return desc
  }
}
