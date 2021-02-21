import { Component, OnInit, Output } from '@angular/core';
import { Transactions } from '../../shared/interfaces/transactions';
import { Observable } from 'rxjs';
import { DataQueryService } from '../../shared/services/data-query.service';
import { Input, EventEmitter, } from '@angular/core';
import { DetailRespose } from '../../shared/interfaces/detail-response';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  @Input() response: DetailRespose | undefined
  @Output() transaction = new EventEmitter<Transactions>()

  public transactions$: Observable<Transactions[]> | undefined

  constructor(private dataQueryService: DataQueryService) { }

  ngOnInit(): void {
    this.transactions$ = this.dataQueryService.getTransactions()
  }

  getTransInfo(transaction: Transactions): void {
    this.transaction.emit(transaction)
  }

}
