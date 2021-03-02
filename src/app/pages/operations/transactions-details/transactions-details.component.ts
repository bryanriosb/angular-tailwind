import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Transactions, TransactionObject } from '../../../shared/interfaces/transactions';
import { RestService } from '../../..//shared/services/rest.service';

@Component({
  selector: 'app-transactions-details',
  templateUrl: './transactions-details.component.html',
  styleUrls: ['./transactions-details.component.scss']
})

export class TransactionsDetailsComponent {

  @Input() payload!: TransactionObject
  @Output() response = new EventEmitter<Transactions[]>()

  public checking: boolean = false

  constructor(private restService: RestService) { }

  validation(transaction: Transactions) {
    this.checking = true;

    /* Actualizamo el estado de la validación */
    transaction.validated = transaction.validated ? false: true
    this.payload.transactions.forEach((trans: Transactions) => {
      if (trans.id === transaction.id) trans.validated = transaction.validated
    })

    /*
      Dado que JSONbin no permite actualizar el objeto por el ID
      se debe pasar todo el JSON
    */
    let subs$ = this.restService.putTransactions(this.payload.transactions)
    .subscribe(request => {
      subs$.unsubscribe()

      let payload: Transactions[] = this.payload.transactions
      request.success ? (this.response.emit(payload), this.checking = false):
      alert('No se pudo confirmar la validación'), this.checking = false
    })
  }

}
