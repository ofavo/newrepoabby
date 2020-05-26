import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PresentationsServicesService } from './services/presentations-services.service';
import { environment } from '../../../environments/environment';
import { CardComponent } from '../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingService } from '../../servicesGenerals/loading.service';

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.page.html',
  styleUrls: ['./presentations.page.scss'],
})
export class PresentationsPage implements OnInit {
  public url = environment.api+ "presentationProduct/?productid=";
  public datos : any = [];
  public name: any = "";
  public buttonRemove: boolean = true;
  public cartProducts: Array<any> = [];
  public products : Array<any> = [
  ];
  public id : string = "";

  constructor(public http: PresentationsServicesService, public loading : LoadingService,
    public modalController: ModalController,public ruter: Router,
     public alertController: AlertController, public toastController: ToastController,private rutaActiva: ActivatedRoute) {
       this.id = this.rutaActiva.snapshot.params.id;
       this.name = this.rutaActiva.snapshot.params.name;
      }

  ngOnInit() {
    this.loading.presentLoading();
    this.http.getPresentations(this.url+this.id).subscribe((data: any)=>{
      if(data){
         this.products = data.data;
    
      this.datos = this.products.slice();
     for(const i in this.datos){
         this.datos[i].add = false
        }
        this.loading.closeloading();
      }
     
    })
    
  }

  goFilters(){
    this.ruter.navigate(['/folder','categorys',`${this.id}`,`${this.name}`])
  }
  
  serchProduct(ev: any){
    let tem = ev.target.value;  
     if(tem && tem.trim() != ''){
      let val = ev.target.value.toLowerCase();
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.products.length;i++) {
           if(this.products[i].product_name.toLowerCase().includes(`${val}`)  ){   
             tempral.push(this.products[i]);
           }
         if(i+1 == this.products.length){
          this.datos = tempral
        }
      }
     }else{
      this.datos = this.products.slice()
     }
   }
   // Genessis si

   addProductButton(select, product, id){
    this.datos.forEach((item, index) => {
      if(select == item.id){
        item.add = true;
        item.quantity = 1
        this.cartProducts.push(item)
      }
    })
   }

   lessProduct(id){
    for(const i in this.products){
      if(this.products[i].id == id){
        if(this.products[i].quantity > 1){
          this.products[i].quantity = this.products[i].quantity - 1 
        }else{
          this.cartProducts.forEach((item, index) => {
            if(id == item.id){
              item.add = false;
              item.quantity = item.quantity - 1
              this.cartProducts.splice(index, 1)
            }
          })
        } 
      }
    }
   }

   moreProduct(id){
    for(const i in this.products){
      if(this.products[i].id == id){
        if(this.products[i].quantity >= 1){
        this.products[i].quantity = this.products[i].quantity + 1
        }
      }
    }
    
 }

  async presentModal() {
    const modal = await this.modalController.create({
      component: CardComponent,
      componentProps: {
        items : this.cartProducts
      }
    });
    return await modal.present();
  }


  async addProduct(id, name, price, category, img) {
    const alert = await this.alertController.create({
      header: name,
      subHeader: "descripcion del producto",
      inputs: [
        {
          name: 'name6',
          type: 'number',
          placeholder: '¿Cuántos desea añadir?'
        },
      ],
      buttons: [
        {
          text: 'Añadir',
          handler: () => {
            console.log('Confirm Ok');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }
      ]
    });

    await alert.present();
  }

  senpedido(){
    let env = {
      "code": "test01",
      "user_buyer_id": 5,
      "user_receive_id": 6,
      "amount": 0,
      "observations": "Test de Guardado Lunes",
      "qr": "ad352aaff552",
      "account": 1,
      "userid": 5,
      "detail": [
       
        ]
  }
    for(let j in this.products){
     
      const valor = {
        "inventory_id":this.products[j].detail[0].id,
        "quantity": 10,
        "price": 3500,
        "amount": 84000,
        "userid": "p05"

      }
      env.detail.push(valor)
    }
  }
  
}
