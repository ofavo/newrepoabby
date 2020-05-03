import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DeliveryPage } from './delivery.page';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPage,
    children: [
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchPageModule)
        
      },
      {
        path: 'process',
        loadChildren: () => import('./process/process.module').then(m => m.ProcessPageModule)
      },
      {
        path: 'balance',
        loadChildren: () => import('./balance/balance.module').then(m => m.BalancePageModule)
      }
    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryPageRoutingModule {}
