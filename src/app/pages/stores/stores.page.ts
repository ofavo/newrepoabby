import { Component, OnInit } from '@angular/core';
import { StoresServicesService } from './services/stores-services.service';
import { environment} from '../../../environments/environment';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-stores',
  templateUrl: './stores.page.html',
  styleUrls: ['./stores.page.scss'],
})
export class StoresPage implements OnInit {
  public url : string = environment.api + "store?locations=";
  public name : any = ""
  public temDatos : any = [
  ];
  public datos: Array<any>;
  public search : string = "";
  public buscar : boolean = false;
  constructor(private http : StoresServicesService,public modalController: ModalController
    ,public ruter: Router, private rutaActiva: ActivatedRoute) { 
    this.name = this.rutaActiva.snapshot.params.name;
    this.search = this.rutaActiva.snapshot.params.id;
  }

  ngOnInit() {
    this.http.get(this.url+this.search+'&pages=100').subscribe((data: any)=>{
      this.temDatos = data
      this.datos = this.temDatos.slice()
      console.log(this.datos)
    })
 
  }
  goStoreProducts(id,name){
    this.ruter.navigate(['/folder','products',`${id}`,`${name}`])
  }
  serchStore(ev: any){
    let tem = ev.target.value;  
   
     if(tem && tem.trim() != ''){
      let val = ev.target.value[0].toLowerCase()+ 
      tem.slice(1);
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.temDatos.length;i++) {
           if(this.temDatos[i].name.includes(`${val}`)  ){   
              this.buscar = true;
              tempral.push(this.temDatos[i]);
           }
         if(i+1 == this.temDatos.length){
          this.datos = tempral
        }
       
      }
     }else{
      this.buscar = false
      this.datos = this.temDatos.slice()
     }
   }
   async presentModal() {
    const modal = await this.modalController.create({
      component: CardComponent
    });
    return await modal.present();
  }
  mostrarphoto(photo){
    if(photo){
      return photo[0];
    }
   
  }

}
