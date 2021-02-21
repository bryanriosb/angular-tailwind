import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';
import { TransactionsModule } from '../transactions/transactions.module';


@NgModule({
  declarations: [OperationsComponent],
  imports: [
    CommonModule,
    OperationsRoutingModule,
    TransactionsModule
  ]
})
export class OperationsModule { }
