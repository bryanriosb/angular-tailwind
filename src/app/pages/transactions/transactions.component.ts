import { Component, OnInit } from '@angular/core';
import { Transactions } from '../../shared/interfaces/transactions';
import { Observable } from 'rxjs';
import { DataQueryService } from '../../shared/services/data-query.service';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  public transactions$: Observable<Transactions[]> | undefined

  constructor(private dataQueryService: DataQueryService) { }

  ngOnInit(): void {
    this.transactions$ = this.dataQueryService.getTransactions()
  }

}
