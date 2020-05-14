import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { CardComponent } from 'src/app/components/card/card.component';
import { ServiceCategoryService } from './services/service-category.service';
import { FiltersServicesService } from 'src/app/servicesGenerals/filters-services.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {
  public url = environment.api + "categoriesForProduct/?storeid=";
  public datos: any = [] 
  public name: any = "";
  public temDatos: any = [];
  public id : string = "";
  public idenv: any = [];
  constructor(public http : ServiceCategoryService ,public ruter: Router, public filters : FiltersServicesService, 
    private rutaActiva: ActivatedRoute,public modalController: ModalController) { 
    this.name = this.rutaActiva.snapshot.params.name;
    this.id = this.rutaActiva.snapshot.params.id;
  }

  ngOnInit() {
   this.http.get(this.url+this.id).subscribe((data: any)=>{
     console.log(data)
     console.log('hola')
   })
    
  }
  goCategoryProducts(){
    if(this.idenv.length > 0){
       this.filters.setItem(this.idenv)
    this.ruter.navigate(['/folder','products',`${this.id}`, `${this.name}`])
    }else{
      this.filters.removeItem()
      this.ruter.navigate(['/folder','products',`${this.id}`, `${this.name}`])
    }
   
  }
  addcategory(id, idn){
    if(id.target.firstChild.value === 'on'){
      this.idenv = this.idenv.splice(idn,1)
      console.log('apagado')
      console.log(this.idenv)
    }else{
      this.idenv.push(idn)
      console.log('encendido')

      console.log(this.idenv)
    }
    
  }

}
