import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public start: number = 1;
  public products : Array<any> = [
    {
      id: 1,
      img: "../../assets/harinapan.jpg",
      name: "Harina Pan 1kg",
      price: "3$"
    },
    {
      id: 2,
      img: "../../assets/harinadetrigo.jpg",
      name: "Harina de trigo Juana 1kg",
      price: "3$"
    },
    {
      id: 3,
      img: "../../assets/mayonesa.png",
      name: "Mayonesa Mavesa 500ml Harina de trigo Juana 1kg",
      price: "5$"
    },
    {
      id: 4,
      img: "../../assets/salsadetomate.jpg",
      name: "Salsa de Tomate Heinz 400ml",
      price: "3$"
    },
    {
      id: 5,
      img: "../../assets/mayonesa.png",
      name: "Mayonesa Mavesa 500ml Harina de trigo Juana 1kg",
      price: "5$"
    },
    {
      id: 6,
      img: "../../assets/salsadetomate.jpg",
      name: "Salsa de Tomate Heinz 400ml",
      price: "3$"
    },
    {
      id: 7,
      img: "../../assets/mayonesa.png",
      name: "Mayonesa Mavesa 500ml Harina de trigo Juana 1kg",
      price: "5$"
    },
    {
      id: 8,
      img: "../../assets/salsadetomate.jpg",
      name: "Salsa de Tomate Heinz 400ml",
      price: "3$"
    },
  ];

  constructor(public modalController: ModalController) { }

  ngOnInit() {}

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  quantity(){
    for(const i in this.products){
      
    }
  }

  add(){
    this.start = this.start + 1;
  }

  remove(){
    if(this.start > 1){
      this.start = this.start - 1;
    }
  }

}
