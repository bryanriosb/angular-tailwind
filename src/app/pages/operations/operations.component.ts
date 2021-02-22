import { Component, OnInit } from '@angular/core';
import { TransactionObject, Transactions } from '../../shared/interfaces/transactions';



@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  public response!: Transactions[]
  public transaction!: TransactionObject
  public validated: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

  getTransaction(transaction: TransactionObject): void {
    this.transaction = transaction
  }

  getDetailResponse(response: Transactions[]): void {
    this.response = response
  }

}
