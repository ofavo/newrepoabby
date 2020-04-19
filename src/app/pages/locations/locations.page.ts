import { Component, OnInit } from '@angular/core';
import { LocationsServicesService } from './services/locations-services.service';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { CodeNode } from 'source-list-map';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {
  public url : string = environment.api + "locations/store/1";
  //public temDatos : any = [{name: 'tachira', City: [ {name: 'Lobatera', id: '1' },{name : 'San Cristobal', id: '2'},
  //{name : 'Cardenas', id: '4'}]},
  //{name:"Merida", City: [{name: 'Merida'}]}, {name:"Miranda", City: [{name: 'Ocumare'}]}
   
  //];
  public temDatos: any = []; 
  public datos: Array<any>;
  public search : string = "";
  public buscar : boolean = false;
  constructor(private http: LocationsServicesService,public ruter: Router) { }

  ngOnInit() {
  
  
    this.http.get(this.url).subscribe((data: any)=>{
    
      if(data){
         Object.keys(data).forEach((e)=>{
        if(Object.keys(data[e].City).length > 0){
          this.temDatos.push(data[e])
        
        } 
      })
      }
     
      
    })
  }
  
  goCity(id,name){
    this.ruter.navigate(['/folder','stores',`${id}`,`${name}`])
  }
   serchLocations(ev: any){
    let tem = ev.target.value;  
   
     if(tem && tem.trim() != ''){
      let val = ev.target.value[0].toUpperCase()+ 
      tem.slice(1);
      let valTwo = ev.target.value;
       this.datos = []
       let tempral = []
      for(let i=0; i< this.temDatos.length;i++) {
       
        for(let j=0;j< this.temDatos[i].City.length;j++){
      
           if(this.temDatos[i].City[j].name.includes(`${val}`)  ){   
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
