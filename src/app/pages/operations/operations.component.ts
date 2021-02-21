import { Component, OnInit } from '@angular/core';
import { Transactions } from '../../shared/interfaces/transactions';
import { DetailRespose } from '../../shared/interfaces/detail-response';


@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  public response: DetailRespose | undefined
  public transaction: Transactions | undefined
  public color: string | undefined
  public validated: boolean = false

  constructor() { }

  ngOnInit(): void {

  }

  getTransaction(transaction: Transactions): void {
    this.transaction = transaction
  }

  getDetailResponse(state: DetailRespose): void {
    console.log(state)
  }

}
