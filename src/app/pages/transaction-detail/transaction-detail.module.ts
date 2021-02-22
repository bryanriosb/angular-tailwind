import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionDetailRoutingModule } from './transaction-detail-routing.module';
import { TransactionDetailComponent } from './transaction-detail.component';
import { IconsModule } from '../../shared/icons/icons.module';


@NgModule({
  declarations: [TransactionDetailComponent],
  imports: [
    CommonModule,
    TransactionDetailRoutingModule,
    IconsModule
  ],
  exports: [TransactionDetailComponent]
})
export class TransactionDetailModule { }
