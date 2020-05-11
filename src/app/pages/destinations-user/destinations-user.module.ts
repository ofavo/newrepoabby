import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DestinationsUserPageRoutingModule } from './destinations-user-routing.module';

import { DestinationsUserPage } from './destinations-user.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DestinationsUserPageRoutingModule
  ],
  declarations: [DestinationsUserPage]
})
export class DestinationsUserPageModule {}
