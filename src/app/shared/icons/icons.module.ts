import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatherModule } from 'angular-feather';
import {
  Bell,
  Search,
  ChevronRight,
  CreditCard,
  Inbox,
  BarChart2
} from 'angular-feather/icons';

const icons = {
  Bell,
  Search,
  ChevronRight,
  CreditCard,
  Inbox,
  BarChart2
};

@NgModule({
  declarations: [],
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule]

})
export class IconsModule { }
