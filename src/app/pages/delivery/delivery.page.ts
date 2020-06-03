import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import {  GeolocatizationService } from '../../servicesGenerals/geolocatization.service';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  constructor(public route : Router, public geo: GeolocatizationService) { }

  ngOnInit() {
    this.geo.callposition();
    this.geo.callposition;
  
  }
  


}
