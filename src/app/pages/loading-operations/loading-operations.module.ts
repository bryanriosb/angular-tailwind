import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingOperationsRoutingModule } from './loading-operations-routing.module';
import { LoadingOperationsComponent } from './loading-operations.component';


@NgModule({
  declarations: [LoadingOperationsComponent],
  imports: [
    CommonModule,
    LoadingOperationsRoutingModule
  ]
})
export class LoadingOperationsModule { }
