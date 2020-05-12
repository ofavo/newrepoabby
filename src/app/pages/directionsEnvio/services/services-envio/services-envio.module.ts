import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServicesEnvioPageRoutingModule } from './services-envio-routing.module';

import { ServicesEnvioPage } from './services-envio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServicesEnvioPageRoutingModule
  ],
  declarations: [ServicesEnvioPage]
})
export class ServicesEnvioPageModule {}
