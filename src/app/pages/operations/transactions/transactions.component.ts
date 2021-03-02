import { Component, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

import { Observable } from 'rxjs';
import { Input, EventEmitter, } from '@angular/core';
import { Transactions, TransactionObject } from 'src/app/shared/interfaces/transactions';
import { RestService } from 'src/app/shared/services/rest.service';



@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit, OnChanges {

  @Input() response!: Transactions[]
  @Output() transaction = new EventEmitter<TransactionObject>()

  public transactions$: Observable<Transactions[]> | undefined
  public validated: boolean = false

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.transactions$ = this.restService.getTransactions()
  }

  /*
    Podríamos obtener el arreglo envíado desde el componente hijo
    con los estados actualizado desde  el Input "response"
  */
  ngOnChanges(changes: SimpleChanges): void {
    // let change = changes['response']
    // if (!change.firstChange && change.currentValue) {
    //   let response = change.currentValue;
    // }
  }

  getTransInfo(transaction: Transactions, transactions: Transactions[]): void {
    let payload: TransactionObject = { transaction, transactions }
    this.transaction.emit(payload)
  }
}
