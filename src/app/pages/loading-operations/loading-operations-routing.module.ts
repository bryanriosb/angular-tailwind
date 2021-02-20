import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoadingOperationsComponent } from './loading-operations.component';

const routes: Routes = [
  {
    path: '',
    component: LoadingOperationsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoadingOperationsRoutingModule { }
