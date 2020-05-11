import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { CardServiceService } from '../../servicesGenerals/card-service.service';
import { FiltersServicesService} from '../../servicesGenerals/filters-services.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

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
    user_buyer_id:1,
    uder_receive_id: null,
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
  constructor(public modalController: ModalController, private navparams: NavParams, public ruter: Router,
    public cardservices : CardServiceService, public filters : FiltersServicesService) { }
  
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
    alert('hola1')
    if (this.products.length > 0){
      alert('hola2')

      for (let i =0; i < this.products.length;i++){
        const valor = {
          inventory_id: this.products[i].inventories[0].inventoriesId ,
          quantity: this.products[i].quantity,
          price: this.products[i].salePrice,
          amount: parseInt(this.products[i].quantity)* parseInt(this.products[i].salePrice),
          userid: this.products[i].userId
        }
        this.envio.detail.push(valor)
        if((i + 1) === this.products.length ){
          alert('hola3')
         this.cardservices.postOrdes(this.url,this.envio).subscribe((data : any) => {
           console.log(data.result[0  ])
            this.filters.setItemTraking(data.result[0])/** 
            this.modalController.dismiss().then(data =>{
              this.ruter.navigateByUrl('folder/destinations-user')
            })*/
            
         })
        }
      }
    }
  }

}
