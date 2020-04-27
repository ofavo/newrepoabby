import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProcessPageRoutingModule } from './process-routing.module';

import { ProcessPage } from './process.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProcessPageRoutingModule,
    RouterModule.forChild([{ path: '', component: ProcessPage }])
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [ProcessPage]
})
export class ProcessPageModule {}
