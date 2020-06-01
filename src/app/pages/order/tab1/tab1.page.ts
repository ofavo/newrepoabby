import { Component, OnInit } from '@angular/core';
import { FiltersServicesService} from '../../../servicesGenerals/filters-services.service';
import { ModalController } from '@ionic/angular';
import { DetailsComponent } from '../components/details/details.component';
import { OrdersService } from '../services/orders.service';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public idUser: string = "";
  public url = environment.api+ "order?user_buyer_id";
  public datos : any = [];
  constructor(public http: OrdersService, public filters : FiltersServicesService, public modalController: ModalController) {

  }
  ngOnInit(){
    this.filters.getIdUsers().then((data: any)=>{
      console.log(data)
      this.idUser = data
      this.http.getOrdersUser(this.url+this.idUser).subscribe((data: any)=>{
        console.log('data: ',data)
        this.datos = data.data
        console.log('datos: ',this.datos)
      })
    })
    
  }
  async presentModal(id, Amount, details, observations, start_date_time, tracking, finish_date_time){
    let datos = {
      id : id,
      amount : Amount,
      details : details,
      observations : observations,
      start_date_time : start_date_time,
      tracking : tracking,
      finish_date_time : finish_date_time
    }
    const modal = await this.modalController.create({
      component: DetailsComponent,
      componentProps: {
        data : datos
      }
    });
    return await modal.present();

  }

}
