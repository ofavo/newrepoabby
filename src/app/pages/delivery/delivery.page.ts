import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Plugins } from '@capacitor/core'; 
const { Geolocation } = Plugins;

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit {

  constructor(public route : Router) { }

  ngOnInit() {
    this.getCurrentPosition()
  }
  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.comprobations(coordinates)
  }
  comprobations(coordinates){
    if(coordinates){
      alert(`${coordinates}`)
    }else{
     
       this.route.navigateByUrl('folder/locations')
    }
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
    })
  }

}
