import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';

@Injectable({
  providedIn: 'root'
})
export class GeolocatizationService {

  constructor(public geolocation: Geolocation) { }
  
   callposition(){
     this.geolocation.getCurrentPosition().then((resp) => {
         alert(resp.coords.latitude);
         alert(resp.coords.longitude);
        console.log(resp);
        console.warn(resp)
      }).catch((error) => {
          console.log('Error getting location', error);
    });
   }
     
  callcoodrinates(){
    let watch = this.geolocation.watchPosition();
     watch.subscribe((data) => {
       console.log(data);
       console.warn(data)
     // data can be a set of coordinates, or an error (if an error occurred).
     // data.coords.latitude
     // data.coords.longitude
     });
  }
   
}
