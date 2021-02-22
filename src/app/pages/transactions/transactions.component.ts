import { Component, OnInit, Output } from '@angular/core';
import { Transactions, TransactionObject } from '../../shared/interfaces/transactions';
import { Observable } from 'rxjs';
import { Input, EventEmitter, } from '@angular/core';
import { RestService } from '../../shared/services/rest.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() response!: Transactions[]
  @Output() transaction = new EventEmitter<TransactionObject>()

  public transactions$: Observable<Transactions[]> | undefined
  public validated: boolean = false

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.transactions$ = this.restService.getTransactions()
  }

  getTransInfo(transaction: Transactions, transactions: Transactions[]): void {
    let payload: TransactionObject = { transaction, transactions }
    this.transaction.emit(payload)
  }
}
