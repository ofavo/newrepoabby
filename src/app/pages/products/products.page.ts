import { Component, OnInit, ViewChild } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsServicesService } from './services/products-services.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { FiltersComponent } from 'src/app/components/filters/filters.component';
import { Observable } from 'rxjs';

import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;
@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {



  public url : string = environment.api + "search/product/store/";
  public datos : any = [];
  public name: any = "";
  public id : string = "";
  public filters : Observable<any[]> ; 
  public temDatos : any = [];
  constructor(private http: ProductsServicesService,public ruter: Router, public popoverT : PopoverController,
    public modalController: ModalController,private rutaActiva: ActivatedRoute) { 
    console.log(this.rutaActiva.snapshot.params.id)
    this.name = this.rutaActiva.snapshot.params.name;
    this.id = this.rutaActiva.snapshot.params.id;
  }

  ngOnInit() {
   
    this.http.get(this.url+this.id+"?pages=1000").subscribe((data: any)=>{
      this.datos = data.data;
      console.log(this.datos);
      this.temDatos = this.datos.slice();
    })
  }

  goPresentatios(id,name){
    this.ruter.navigate(['/folder','presentations',`${id}`,`${name}`])
  }


  
  serchProduct(ev: any){
    let tem = ev.target.value;  
   
     if(tem && tem.trim() != ''){
      let val = ev.target.value;
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.temDatos.length;i++) {
       
           if(this.temDatos[i].productName.includes(`${val}`)  ){   
          
             tempral.push(this.temDatos[i]);


           }
         if(i+1 == this.temDatos.length){
          this.datos = tempral
        }
       
      }
     }else{
    
      this.datos = this.temDatos.slice()
     }
   }
  ConverUrl(url){
    
    if(url){
       let urlNew = url[0];
       console.log(urlNew);
      return urlNew;
    }
   
  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: CardComponent
    });
    return await modal.present();
  }
  async presentPopover(ev: any) {
    const popover = await this.popoverT.create({
      component: FiltersComponent,
      event: ev,
     
      translucent: true
    });
    return await popover.present();
  }
 getItem(value) {
   
    console.log('Got item: ', value);
  }
}
