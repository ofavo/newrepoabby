import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public url : string = environment.api + "order";
  public total : number = 0;
  public subtotal : number = 0;
  public products : any = [];
  public envio : any = {
    code:"",
    user_buyer_id:"",
    uder_receive_id:"",
    amount: 0,
    observations: "",
    qr: "",
    account: 1,
    userid: "p05",
    detail:[
      
    ]

  }
  public detalles: {
    inventory_id:0,
    quantity:0,
    price: 0,
    amount: 0,
    userid: ""
  }
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
    if(this.products.length > 0){
      for(const i in this.products){
        this.subtotal = this.products[i].quantity * parseInt(this.products[i].salePrice);
        this.total = this.subtotal;
     
      
      } return this.total
    }
    
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
    if (this.products.length > 0){
      for (let i in this.products){
        const valor = {
          inventory_id: this.products.inventories[0].inventoriesId ,
          quantity:0,
          price: 0,
          amount: 0,
          userid: ""
        }
        this.envio.detail.push(valor)
        if((i + 1) === this.products.length ){
         
        }
      }
    }
  }

}
