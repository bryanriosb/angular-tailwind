import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'loading',
        loadChildren: () => import('./loading-operations/loading-operations.module').then(m => m.LoadingOperationsModule)
      },
      {
        path: 'operations',
        loadChildren: () => import('./operations/operations.module').then(m => m.OperationsModule)
      },
      {
        path: '',
        redirectTo: 'loading'
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
