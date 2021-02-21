import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-operations',
  templateUrl: './loading-operations.component.html',
  styleUrls: ['./loading-operations.component.scss']
})
export class LoadingOperationsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/pages/operations'])
    }, 3500);
  }

}
