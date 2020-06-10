import { Component, OnInit } from '@angular/core';

import { DirectionsComponent } from 'src/app/components/directions/directions.component';
import { ModalController } from '@ionic/angular';
import { FiltersServicesService} from '../../servicesGenerals/filters-services.service';
import { DirectionsEnvioService } from './services/directions-envio.service';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-directions-envio',
  templateUrl: './directions-envio.page.html',
  styleUrls: ['./directions-envio.page.scss'],
})
export class DirectionsEnvioPage implements OnInit {
  public datos : any = [];
  public url : string = environment.apia + "users/addresses";
  constructor(public modalController: ModalController, public filters : FiltersServicesService, public http: DirectionsEnvioService) {
   
   }

  ngOnInit() {
    this.filters.getToken().then((envio)=>{
      let headers = {
        'Content-Type' : 'application/json',
        'Accept-Language': 'es',
        'Authorization' : envio
      }
      this.http.getAddress(this.url, headers).subscribe((data: any)=>{
        this.datos = data
      })
    })
  }

  async presentModal(id, address_components, alias, geographical_locations,  phone_number) {
    let datos = {
      id : id,
      phone: phone_number,
      address : address_components,
      alias : alias,
      geographical: geographical_locations
    }
    console.log('datos2', datos)
    const modal = await this.modalController.create({
      component: DirectionsComponent,
      componentProps: {
        datos : datos
      }
    });
    return await modal.present();
  }

}
