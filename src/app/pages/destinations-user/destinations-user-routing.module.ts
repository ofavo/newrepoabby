import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DestinationsUserPage } from './destinations-user.page';

const routes: Routes = [
  {
    path: '',
    component: DestinationsUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DestinationsUserPageRoutingModule {}
