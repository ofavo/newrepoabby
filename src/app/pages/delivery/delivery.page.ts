import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {  GeolocatizationService } from '../../servicesGenerals/geolocatization.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {
  public activate : any;
  constructor(public route : Router, public geo: GeolocatizationService) {
    this.geo.getCurrentPosition().then((data: any)=>{
      console.log(data)
      if(!data.coords.latitude){
        alert('Se Necesita el Gps para acceder a esta funcion ')
        this.route.navigateByUrl('folder/locations')
      }
    })
   }

  ngOnInit() {
   
 
 
   
  
  }
  


}
