import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ProductsServicesService } from './services/products-services.service';
import { FiltersServicesService } from '../../servicesGenerals/filters-services.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CardComponent } from '../../components/card/card.component';
import { ModalController } from '@ionic/angular';
import { LoadingService } from 'src/app/servicesGenerals/loading.service';



@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  public url : string = environment.api + "search/product/store/";
  public urlfilters : string = environment.api + "search/categories/store/"
  public datos : any = [];
  public name: any = "";
  public id : string = "";
  public filtro : any = []; 
  public temDatos : any = [];
  constructor(private http: ProductsServicesService,public ruter: Router, public loading : LoadingService,
    public modalController: ModalController,private rutaActiva: ActivatedRoute,public filters : FiltersServicesService) { 
    
    this.name = this.rutaActiva.snapshot.params.name;
    console.log(this.name)
    this.id = this.rutaActiva.snapshot.params.id;
   
  }

  ngOnInit() {
   
   
  }
  ionViewWillEnter(){
   this.cargar()
  }
  cargar(){ 
    this.datos = []
    this.loading.presentLoading()
    this.filters.getItem().then((data: any) => {
      console.log(data)
      if(data.value){
        this.filtro.push(data.value);
        this.http.post(this.urlfilters+this.id,this.filtro).subscribe((data : any)=>{
          this.datos = data.data
          this.filters.removeItem()
       this.loading.closeloading()
        })
       
      }else{
         this.http.get(this.url+this.id+"?pages=1000").subscribe((data: any)=>{
       this.datos = data.data;
       console.log(this.datos);
       this.temDatos = this.datos.slice();
       this.loading.closeloading()
     }, err =>{
       this.loading.closeloading();
     });
      }
    })
  }
  goPresentatios(id,name){
    this.ruter.navigate(['/folder','presentations',`${id}`,`${name}`])
  }


  
  serchProduct(ev: any){
    let tem = ev.target.value;  
   
     if(tem && tem.trim() != ''){
      let val = ev.target.value.toLowerCase();
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.temDatos.length;i++) {
       
           if(this.temDatos[i].product_name.toLowerCase().includes(`${val}`)  ){   
          
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
 
  filter(){
    this.ruter.navigateByUrl(`folder/categorys/${this.id}/${this.name}`)
  }

}
