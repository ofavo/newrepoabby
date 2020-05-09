import { Component, OnInit } from '@angular/core';

import { ModalController } from '@ionic/angular';
import { FiltersServicesService } from '../../servicesGenerals/filters-services.service';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public idenv: any = [];
 
  constructor( public popover : ModalController, public filters : FiltersServicesService ) { }

  ngOnInit() {}

  addcategory(id, idn){
    if(id.target.firstChild.value === 'on'){
      this.idenv.slice(idn,1)
      console.log('apagado')
      console.log(this.idenv)
    }else{
      this.idenv.push(idn)
      console.log('encendido')

      console.log(this.idenv)
    }
    
  }
  close() {
     
 
    this.popover.dismiss({ 
      'dismissed': true
       });
  }

}
