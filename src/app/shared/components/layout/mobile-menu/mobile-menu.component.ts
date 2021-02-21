import { Component, OnInit } from '@angular/core';
import { SlideInOutAnimation } from './animations';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
  animations: [SlideInOutAnimation]
})
export class MobileMenuComponent {

  public animationState: string = 'out';

  toggleShowDiv(div: string): void {
    if (div === 'show-mobil-menu') {
      this.animationState = this.animationState === 'out' ? 'in' : 'out';
    }
  }
}
