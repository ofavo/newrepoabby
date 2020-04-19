import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';


@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
   
    RouterModule.forChild([{ path: '', component: Tab2Page }])
  ],
  providers: [BarcodeScanner],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
