import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public total : number = 0;
  public subtotal : number = 0;
  public products : Array<any> = [
  
  ];

  constructor(public modalController: ModalController, private navparams: NavParams) { }

  ngOnInit() {
    this.products = this.navparams.get('items')
    console.log(this.products)
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
      this.subtotal = this.products[i].quantity * parseInt(this.products[i].salePrice);
      this.total = this.subtotal;
     
      
    } return this.total
  }



  add(id){
    for(const i in this.products){
      if(this.products[i].id == id){
        this.products[i].quantity = this.products[i].quantity + 1;
        
      }
    }
  }

  remove(id){
    for(const i in this.products){
      if(this.products[i].id == id){
        if(this.products[i].quantity > 1){
          this.products[i].quantity = this.products[i].quantity - 1;
         
        }
      }
    }
  }

  sentPedido(){
    
  }

}
