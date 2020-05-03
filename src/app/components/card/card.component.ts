import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public total : number = 0;
  public subtotal : Array<number> = [];
  public products : Array<any> = [];

  constructor(public modalController: ModalController, private navparams: NavParams) { }

  ngOnInit() {
    this.products = this.navparams.get('items')
  }

  ionViewDidEnter(){
    this.totalAmount()
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  totalAmount(){
    for(const i in this.products){
      this.subtotal.push(this.products[i].quantity * this.products[i].price);
      this.total = this.subtotal.reduce((a, b) => a + b, 0);
      console.log(this.subtotal)
      console.log(this.total)
    }
  }

  subtotalAmount(){
    this.subtotal = [];
    this.total = 0;
    for(const i in this.products){
      this.subtotal.push(this.products[i].quantity * this.products[i].price)
      this.total = this.subtotal.reduce((a, b) => a + b, 0);
      console.log(this.subtotal)
      console.log(this.total)
    }
  }

  add(id){
    for(const i in this.products){
      if(this.products[i].id == id){
        this.products[i].quantity = this.products[i].quantity + 1;
        this.subtotalAmount()
      }
    }
  }

  remove(id){
    for(const i in this.products){
      if(this.products[i].id == id){
        if(this.products[i].quantity > 1){
          this.products[i].quantity = this.products[i].quantity - 1;
          this.subtotalAmount()
        }
      }
    }
  }

}
