import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Plugins } from '@capacitor/core'; 
const { Geolocation } = Plugins;

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.page.html',
  styleUrls: ['./delivery.page.scss'],
})
export class DeliveryPage implements OnInit, OnDestroy {

  constructor(public route : Router) { }

  ngOnInit() {
    this.watchPosition()
  }
  ngOnDestroy(){
  

    
  }
  async getCurrentPosition() {
    
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
 
  }
  comprobations(coordinates){
    if(coordinates){
      alert(`${coordinates}`)
      return console.log(coordinates)
    }else{
      console.log(coordinates)
      return this.route.navigateByUrl('folder/locations')
    }
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      return this.comprobations(position);
      
    })
  }

}
