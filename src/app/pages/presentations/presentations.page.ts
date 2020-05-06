import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PresentationsServicesService } from './services/presentations-services.service';
import { environment } from '../../../environments/environment';
import { CardComponent } from '../../components/card/card.component';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.page.html',
  styleUrls: ['./presentations.page.scss'],
})
export class PresentationsPage implements OnInit {
  public url = environment.api+ "presentationProduct?productid=";
  public datos : any = [];
  public name: any = "";
  public buttonRemove: boolean = true;
  public cartProducts: Array<any> = [];
  // public quantity: number = 1;
  // public products : Array<any> = [
  // ];
  public products : Array<any> = [
   
  ];
  public id : string = "";

  constructor(public http: PresentationsServicesService,public modalController: ModalController,public ruter: Router,
     public alertController: AlertController, public toastController: ToastController,private rutaActiva: ActivatedRoute) {
       this.id = this.rutaActiva.snapshot.params.id;
       this.name = this.rutaActiva.snapshot.params.name;
      }

  ngOnInit() {
    this.http.getPresentations(this.url+this.id+"&pages=1000").subscribe((data: any)=>{
      this.products = data.data;
      console.log(this.products)
      this.datos = this.products.slice();
    for(const i in this.datos){
      this.datos[i].add = false
    }
    })
    
  }


  goFilters(){
    this.ruter.navigate(['/folder','categorys',`${this.id}`,`${this.name}`])
  }
  
  serchProduct(ev: any){
    let tem = ev.target.value;  
     if(tem && tem.trim() != ''){
      let val = ev.target.value;
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.products.length;i++) {
           if(this.products[i].presentationName.includes(`${val}`)  ){   
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
        item.quantity = item.quantity + 1
        this.cartProducts.push(item)
        console.log('cartProductAdd: ',this.cartProducts)
      }
    })
    //product es el producto entero, no sé donde lo vas a guardar pero ahi está para que le hagas post o algo.
   }

   lessProduct(id){
    for(const i in this.products){
      if(this.products[i].id == id){
        if(this.products[i].quantity > 1){
          this.products[i].quantity = this.products[i].quantity - 1 
        }else{
        //Aqui vas a poner cuando vayas a eliminar el producto, por ahora te lo dejaré que se oculte el input
          this.cartProducts.forEach((item, index) => {
            if(id == item.id){
              item.add = false;
              item.quantity = item.quantity - 1
              this.cartProducts.splice(index, 1)
              console.log('cartProductRemove: ',this.cartProducts)
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
    //Cada vez que sumes o restes tienes que actualizar el producto en carrito
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

}
