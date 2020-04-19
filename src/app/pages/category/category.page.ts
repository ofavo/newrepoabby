import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CardComponent } from 'src/app/components/card/card.component';
import { ServiceCategoryService } from './services/service-category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public url = environment.api + "categoryStore?storeid=";
  public datos: any = [] 
  public name: any = "";
  public temDatos: any = [];
  public id : string = "";
  constructor(public http : ServiceCategoryService ,public ruter: Router, private rutaActiva: ActivatedRoute,public modalController: ModalController) { 
    this.name = this.rutaActiva.snapshot.params.name;
    this.id = this.rutaActiva.snapshot.params.id;
  }

  ngOnInit() {
    this.http.get(this.url+this.id+"&pages=100").subscribe((data: any)=>{
      this.datos = data;
      this.temDatos = this.datos.slice()
    })
    
  }
  goCategoryProducts(id, name){
    this.ruter.navigate(['/folder','products',`${id}`, `${name}`])
  }
  serchCateory(ev: any){
    let tem = ev.target.value;  
   
     if(tem && tem.trim() != ''){
      let val = ev.target.value[0].toUpperCase()+ 
      tem.slice(1);
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.temDatos.length;i++) {
       
           if(this.temDatos[i].name.includes(`${val}`)  ){   
            
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
   async presentModal() {
    const modal = await this.modalController.create({
      component: CardComponent
    });
    return await modal.present();
  }
  ConverUrl(url){
    
    if(url){
       let urlNew = url[0];
       console.log(urlNew);
      return urlNew;
    }
   
  }
}
