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
  public city: string = '';
  public url : string = environment.apia + "users/addresses";
  constructor(public modalController: ModalController, public filters : FiltersServicesService, public http: DirectionsEnvioService) {
   
   }

  ngOnInit() {
    this.filters.getToken().then((envio)=>{
      console.log('token: ',envio)
      const headers = {
        'Content-Type' : 'application/json',
        'Accept-Language': 'es',
        'Authorization' : envio
      }
      this.http.getAddress(this.url, {headers: headers}).subscribe((data: any)=>{
        console.log(data)
      })
    })
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DirectionsComponent
    });
    return await modal.present();
  }

}
