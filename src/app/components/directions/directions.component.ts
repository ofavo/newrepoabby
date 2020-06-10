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
  public address_components : string = "";
  public geographical_locations : string = "";
  public pais: string = "";
  public state : string = "";
  public url : string = environment.apia + "users/addresses";
  public cities : any = [];
  public city : any = [];
  public directionOne: string = "";
  public idUser: string = "";
  public datos : Array<any> = [];
  constructor(public modalController: ModalController, private navparams: NavParams, 
  public filters : FiltersServicesService, public http: DirectionsServiceService) { }

  ngOnInit() {
    this.datos = this.navparams.get('datos')
    console.log('datos', this.datos)
    this.filters.getCities().then((data: any)=>{
      this.cities = JSON.parse(data)
      for(let i=0; i< this.cities.length;i++){
        for(let j=0;j< this.cities[i].City.length;j++){
            let val = false
            if( this.city.length == 0){
              this.city.push(this.cities[i].City[j]);
            }else{
              for(let c = 0; c < this.city.length; c++){
                if (this.city[c].cityName == this.cities[i].City[j].cityName){
                  val = true
                }
                if(this.city.length  == c + 1  ){
                    if(!val){
                      this.city.push(this.cities[i].City[j]);
                    }
                }
              }
            }
        }
      }
      console.log('ciudades3', this.cities)
     })
  }

  sentData() {
   console.log('este',this.geographical_locations)
    let env = {
      alias : this.alias,
	    phone_number: '+58' + this.phone_number,
      address_components : {
        "1": this.address_components
      },
      geographical_locations : this.geographical_locations
    }
    console.log(env)
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
