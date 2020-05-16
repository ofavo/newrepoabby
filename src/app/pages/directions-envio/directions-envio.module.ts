import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirectionsEnvioPageRoutingModule } from './directions-envio-routing.module';

import { DirectionsEnvioPage } from './directions-envio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirectionsEnvioPageRoutingModule
  ],
  declarations: [DirectionsEnvioPage]
})
export class DirectionsEnvioPageModule {}
