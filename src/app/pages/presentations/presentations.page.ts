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
      this.products = data;
      console.log(this.products)
    })
    this.datos = this.products.slice();
  }

  // sentData() {
  //   let env = {
  //     email : this.email,
  //     password : this.password
  //   }
  //   this.http.getPresentations(`${environment.url}/presentations`).subscribe((data: any)=>{
  //     if(data){
  //       this.router.navigateByUrl('products')
  //     }
  //   },err =>{
  //    this.presentAlert()
  //   })
  // }
  goFilters(){
    this.ruter.navigate(['/folder','categorys',`${this.id}`,`${this.name}`])
  }
  
  serchProduct(ev: any){
    let tem = ev.target.value;  
     if(tem && tem.trim() != ''){
      let val = ev.target.value[0].toUpperCase()+ 
      tem.slice(1);
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.products.length;i++) {
           if(this.products[i].name.includes(`${val}`)  ){   
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

  async presentModal() {
    const modal = await this.modalController.create({
      component: CardComponent
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
