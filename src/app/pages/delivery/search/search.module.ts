import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchPageRoutingModule } from './search-routing.module';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { SearchPage } from './search.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchPageRoutingModule,
    RouterModule.forChild([{ path: '', component: SearchPage }])
  ],
  providers: [BarcodeScanner],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [SearchPage]
})
export class SearchPageModule {}
