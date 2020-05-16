import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirectionsEnvioPage } from './directions-envio.page';

const routes: Routes = [
  {
    path: '',
    component: DirectionsEnvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirectionsEnvioPageRoutingModule {}
