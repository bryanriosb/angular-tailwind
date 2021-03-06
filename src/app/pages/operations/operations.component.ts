import { Component } from '@angular/core';
import { Transactions, TransactionObject } from '../../shared/interfaces/transactions';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent {

  public response!: Transactions[]
  public transaction!: TransactionObject
  public validated: boolean = false

  constructor() { }

  getTransaction(transaction: TransactionObject): void {
    this.transaction = transaction
  }

  getDetailResponse(response: Transactions[]): void {
    this.response = response
  }

}
