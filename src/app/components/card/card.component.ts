import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public total : number = 0;
  public subtotal : Array<number> = [];
  public products : Array<any> = [
    {
      id: 1,
      img: "../../assets/harinapan.jpg",
      name: "Harina Pan 1kg",
      price: 2,
      quantity: 1
    },
    {
      id: 2,
      img: "../../assets/harinadetrigo.jpg",
      name: "Harina de trigo Juana 1kg",
      price: 5,
      quantity: 1
    },
    {
      id: 3,
      img: "../../assets/mayonesa.png",
      name: "Mayonesa Mavesa 500ml Harina de trigo Juana 1kg",
      price: 8,
      quantity: 1
    },
    {
      id: 4,
      img: "../../assets/salsadetomate.jpg",
      name: "Salsa de Tomate Heinz 400ml",
      price: 4,
      quantity: 1
    },
    {
      id: 5,
      img: "../../assets/mayonesa.png",
      name: "Mayonesa Mavesa 500ml Harina de trigo Juana 1kg",
      price: 3,
      quantity: 1
    },
    {
      id: 6,
      img: "../../assets/salsadetomate.jpg",
      name: "Salsa de Tomate Heinz 400ml",
      price: 2,
      quantity: 1
    },
    {
      id: 7,
      img: "../../assets/mayonesa.png",
      name: "Mayonesa Mavesa 500ml Harina de trigo Juana 1kg",
      price: 1,
      quantity: 1
    },
    {
      id: 8,
      img: "../../assets/salsadetomate.jpg",
      name: "Salsa de Tomate Heinz 400ml",
      price: 4,
      quantity: 1
    },
  ];

  constructor(public modalController: ModalController) { }

  ngOnInit() {

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
