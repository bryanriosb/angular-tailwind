import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TransactionDetailRoutingModule } from './transaction-detail-routing.module';
import { TransactionDetailComponent } from './transaction-detail.component';


@NgModule({
  declarations: [TransactionDetailComponent],
  imports: [
    CommonModule,
    TransactionDetailRoutingModule
  ],
  exports: [TransactionDetailComponent]
})
export class TransactionDetailModule { }
