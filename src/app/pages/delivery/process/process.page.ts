import { DetailsTrackingComponent } from './../components/details-tracking/details-tracking.component';
import { Component, OnInit } from '@angular/core';
import { GeolocatizationService } from '../../../servicesGenerals/geolocatization.service';
import {environment } from '../../../../environments/environment';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-process',
  templateUrl: './process.page.html',
  styleUrls: ['./process.page.scss'],
})
export class ProcessPage implements OnInit {
  public urlget = environment.api;
  public data: any = [];
  public env: any = {

  } 
  constructor( public geo: GeolocatizationService, public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentModal(){
   let datos : any = []
    const modal = await this.modalController.create({
      component: DetailsTrackingComponent,
      componentProps: {
        data : datos
      }
    });
    return await modal.present();

  }

}
