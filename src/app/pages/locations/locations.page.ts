import { Component, OnInit } from '@angular/core';
import { LocationsServicesService } from './services/locations-services.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

import { FiltersServicesService } from 'src/app/servicesGenerals/filters-services.service';
import { LoadingService } from 'src/app/servicesGenerals/loading.service';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public url : string = environment.api + "locations/store/1?pages=25";
  //public temDatos : any = [{name: 'tachira', City: [ {name: 'Lobatera', id: '1' },{name : 'San Cristobal', id: '2'},
  //{name : 'Cardenas', id: '4'}]},
  //{name:"Merida", City: [{name: 'Merida'}]}, {name:"Miranda", City: [{name: 'Ocumare'}]}
   
  //];
  public temDatos: any = []; 
  public datos: Array<any>;
  public search : string = "";
  public buscar : boolean = false;
  constructor(private http: LocationsServicesService,public ruter: Router,public loading : LoadingService,
    public filtres : FiltersServicesService,) { 
      
    }

  ngOnInit() { 
    this.loading.presentLoading();
  const token  = this.filtres.getToken().then(data =>{

  })

    this.http.get(this.url).subscribe((data: any)=>{
     
  
      if(data){
         Object.keys(data.data).forEach((e)=>{
        if(Object.keys(data.data[e].City).length > 0){
          this.temDatos.push(data.data[e])
         
        } 
      })
      setTimeout(() => {
        this.loading.closeloading()
      }, 200);
      }
     
      
    }, err => {
      this.loading.closeloading()
    })
  }
  
  goCity(id,name,city){

    this.filtres.setCity(city);
    this.ruter.navigate(['/folder','products',`${id}`,`${name}`])
  }
   serchLocations(ev: any){
    let tem = ev.target.value;  
   
     if(tem && tem.trim() != ''){
      let val = ev.target.value.toLowerCase();
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.temDatos.length;i++) {
       
        for(let j=0;j< this.temDatos[i].City.length;j++){
      
           if(this.temDatos[i].City[j].cityName.toLowerCase().includes(`${val}`)  ){   
              this.buscar = true;
           tempral.push(this.temDatos[i]);
            break

           }else{
             this.buscar = false 
            this.datos = []
           }
          
        } if(i+1 == this.temDatos.length){
          return this.datos = tempral
        }
       
      }
     }else{
      this.buscar = false
      this.datos = []
     }
   }

}
