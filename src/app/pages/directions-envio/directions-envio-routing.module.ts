import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionsEnvioPage } from './directions-envio.page';

const routes: Routes = [
  {
    path: '',
    component: DirectionsEnvioPage
  },
  {
    path: 'services-envio',
    loadChildren: () => import('../directionsEnvio/services/services-envio/services-envio.module').then( m => m.ServicesEnvioPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectionsEnvioPageRoutingModule {}
