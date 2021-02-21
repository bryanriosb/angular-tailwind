import { Component, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges, OnInit } from '@angular/core';
import { Transactions } from '../../shared/interfaces/transactions';
import { DetailRespose } from '../../shared/interfaces/detail-response';

@Component({
  selector: 'app-transaction-detail',
  templateUrl: './transaction-detail.component.html',
  styleUrls: ['./transaction-detail.component.scss']
})
export class TransactionDetailComponent implements OnChanges {

  @Input() transaction: Transactions | undefined
  @Output() response = new EventEmitter<DetailRespose>()

  public validated: boolean = false;

  constructor() { }

  ngOnChanges(chages: SimpleChanges) {
    let change = chages['transaction']
    if (!change.firstChange && change.currentValue) {
      console.log(change.currentValue)

      // this.hiddenData()
    }
  }

  hiddenData() {
    setTimeout(() => {
      this.transaction = undefined
    }, 10000);
  }

  validation() {
    this.validated = this.validated === false ? true: false

    let state: DetailRespose;
    if (this.validated) {
      state = {
        color: 'black',
        validated: true
      }
    } else {
      state = {
        color: undefined,
        validated: false
      }
    }

    this.response.emit(state)
  }
}
