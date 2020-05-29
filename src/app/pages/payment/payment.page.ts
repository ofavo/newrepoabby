import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  public select : boolean = false;
  public button : boolean = false;

  constructor(public ruter: Router) { }

  ngOnInit() {
  }

  onChangeSelect(e) {
    if(e == 'tdc'){
      this.select = true;
      this.button = false;
    } else {
      this.select = false;
      this.button = true;
    }
  }

  onChangeSelectTdc(e) {
    if(e){
      this.button = true;
    }
  }
  goOrders(){
    this.ruter.navigateByUrl('/folder/orders/tab1')
  }

}
