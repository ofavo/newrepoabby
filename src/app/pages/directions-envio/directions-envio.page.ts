import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DirectionsComponent } from 'src/app/components/directions/directions.component';

@Component({
  selector: 'app-directions-envio',
  templateUrl: './directions-envio.page.html',
  styleUrls: ['./directions-envio.page.scss'],
})
export class DirectionsEnvioPage implements OnInit {

  constructor(public modalController: ModalController,) { }

  ngOnInit() {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: DirectionsComponent
    });
    return await modal.present();
  }

}
