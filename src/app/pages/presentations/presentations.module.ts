import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PresentationsPageRoutingModule } from './presentations-routing.module';

import { PresentationsPage } from './presentations.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PresentationsPageRoutingModule
  ],
  declarations: [PresentationsPage]
})
export class PresentationsPageModule {}
