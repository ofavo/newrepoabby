import { Component, OnInit } from '@angular/core';
import { FiltersServicesService } from '../../servicesGenerals/filters-services.service';
import { DirectionsComponent } from '../../components/directions/directions.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations-user',
  templateUrl: './destinations-user.page.html',
  styleUrls: ['./destinations-user.page.scss'],
})
export class DestinationsUserPage implements OnInit {
public datos : any  = [];
public id : string = "";
  constructor(public filters : FiltersServicesService,public ruter: Router, public modal : ModalController) { 

  }

  ngOnInit() {
   this.filters.getItemTraking().then((data: any) =>{
     console.log(JSON.parse(data.value))
   })
  }
  createDireccrion(){
    this.filters.getCity().then((data: any)=>{
     
     this.presentModal(data);
        
   
  })}

  async presentModal(data) {
    const modal = await this.modal.create({
      component: DirectionsComponent,
      componentProps : data
    });
    return await modal.present();
  }
}
