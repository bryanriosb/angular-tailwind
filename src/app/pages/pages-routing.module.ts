import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: 'loading',
        loadChildren: () => import('./loading-operations/loading-operations.module').then(m => m.LoadingOperationsModule)
      },
      { path: '', redirectTo: 'loading', pathMatch: 'full' },
      { path: '**', redirectTo: 'loading' }
    ]
  }  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
