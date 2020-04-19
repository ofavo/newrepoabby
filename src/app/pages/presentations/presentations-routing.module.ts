import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationsPage } from './presentations.page';

const routes: Routes = [
  {
    path: '',
    component: PresentationsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresentationsPageRoutingModule {}
