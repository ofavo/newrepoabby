import { Component, OnInit } from '@angular/core';
import { FiltersServicesService } from '../../servicesGenerals/filters-services.service';
import { DestinationsUserService } from '../destinations-user/services/destinations-user.service';
import { DirectionsComponent } from '../../components/directions/directions.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-destinations-user',
  templateUrl: './destinations-user.page.html',
  styleUrls: ['./destinations-user.page.scss'],
})
export class DestinationsUserPage implements OnInit {
  public url : string = environment.api + 'tracking';
  public datos : any  = [];
  public id : string = "";
  public select : boolean = false;
  constructor(public filters : FiltersServicesService,public ruter: Router, public modal : ModalController, 
    public http : DestinationsUserService, public toastController: ToastController) { 

  }

  ngOnInit() {
   this.filters.getItemTraking().then((data: any) =>{
     this.datos = JSON.parse(data.value)
     console.log(this.datos)
   });
   this.filters.getIdUsers().then((data: any)=>{
     this.id = data
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

  sentDirecction(){
    let evn = {
      search_id: this.datos.id,
      is_detail: false,
      state_id: 4,
      tracking_user_id: this.datos.traking.tracking_user_id,
      observations: "",
      accout: 1,
      userid:this.id
    }
    let respuesta : any= this.http.post(this.url,evn)
    setTimeout(() => {
       if(respuesta == 'Error'){
      alert('Error al cargar pedido')
    }else{
      this.ruter.navigateByUrl('/folder/payment')
    }
    }, 200);
   
  }

  onChangeSelect(e) {
    if(e){
      this.select = true;
      this.presentToast()
    } else {
      this.select = false;
    }
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Recuerde avisarle al usuario de destino.',
      duration: 2000
    });
    toast.present();
  }
}
