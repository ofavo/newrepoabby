import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { FiltersServicesService} from '../../servicesGenerals/filters-services.service';
import { DirectionsServiceService } from '../../servicesGenerals/directions-service.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent implements OnInit {
  public alias : string = "";
  public phone_number : string = "";
  public address_components : any = {};
  public pais: string = "";
  public state : string = "";
  public url : string = environment.apia + "users/addresses";
  public cities : any = [];
  public city : any = [];
  public directionOne: string = "";
  public idUser: string = "";
  constructor(public modalController: ModalController, private navparams: NavParams, 
  public filters : FiltersServicesService, public http: DirectionsServiceService) { }

  ngOnInit() {
    this.filters.getCities().then((data: any)=>{
      this.cities = JSON.parse(data)
      for(let i=0; i< this.cities.length;i++){
        for(let j=0;j< this.cities[i].City.length;j++){
          if(this.cities[i].City[j].cityName){
            this.city.push(this.cities[i]);
            console.log('ciudades1', this.city[i])
            console.log('ciudades2', this.city[i].City[j].cityName)
          }
          
        } 
      }
      console.log('ciudades3', this.cities)
     })
  }

  sentData() {
    let env = {
      alias : this.alias,
	    phone_number: this.phone_number,
      address_components : this.address_components,
      geographical_locations : "275"
    }
    this.filters.getToken().then((envio)=>{
      const headers = {
        'Content-Type' : 'application/json',
        'Authorization' : envio
      }
      this.http.postDirections(this.url,env,{headers: headers}).subscribe((data: any)=>{
        console.log('envio: ', data)
      },err =>{
        console.log('error: ', err)
      })
    })
  }
  
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
