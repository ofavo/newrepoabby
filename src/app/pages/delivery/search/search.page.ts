import { Component, OnInit } from '@angular/core';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx'

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  public contadorPendiente = [{name:'oscar'}];
  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
    if(Object.keys(this.contadorPendiente).length == 0){

    }else{
      this.scan();
    }
  }
  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      alert(barcodeData)
      console.log('Barcode data', barcodeData);
     }).catch(err => {
         console.log('Error', err);
     });
  }

}
