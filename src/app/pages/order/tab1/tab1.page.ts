import { Component, OnInit } from '@angular/core';
import { FiltersServicesService} from '../../../servicesGenerals/filters-services.service';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public idUser: string = ""
  constructor(public filters : FiltersServicesService, public modalController: ModalController) {

  }
  ngOnInit(){
    this.filters.getIdUsers().then((data: any)=>{
      console.log(data)
    })
    
  }
  async presentModal(){
    const modal = await this.modalController.create({
      component: DetailsComponent
    });
    return await modal.present();

  }

}
