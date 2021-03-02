import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OperationsRoutingModule } from './operations-routing.module';
import { OperationsComponent } from './operations.component';

import { TransactionsDetailsComponent } from './transactions-details/transactions-details.component';
import { TransactionsComponent } from './transactions/transactions.component';



@NgModule({
  declarations: [
    OperationsComponent,
    TransactionsComponent,
    TransactionsDetailsComponent

  ],
  imports: [
    CommonModule,
    OperationsRoutingModule
  ]
})
export class OperationsModule { }
