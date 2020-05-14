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
    this.watchPosition()
  }
  async getCurrentPosition() {
    
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
 
  }
  comprobations(coordinates){
    if(coordinates){
      alert(`${coordinates}`)
      console.log(coordinates)
    }else{
      console.log(coordinates)
       this.route.navigateByUrl('folder/locations')
    }
  }

  watchPosition() {alert('hola')
    const wait = Geolocation.watchPosition({}, (position, err) => {
      this.comprobations(position)
    })
  }

}
