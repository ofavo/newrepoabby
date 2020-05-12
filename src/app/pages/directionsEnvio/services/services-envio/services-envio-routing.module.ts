import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServicesEnvioPage } from './services-envio.page';

const routes: Routes = [
  {
    path: '',
    component: ServicesEnvioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicesEnvioPageRoutingModule {}
