import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-link',
  templateUrl: './text-link.component.html',
  styleUrls: ['./text-link.component.scss']
})
export class TextLinkComponent{
  @Input () text:string 
  @Input () route:string 
  @Input () icon:string 
  @Input () margin: string 
}
