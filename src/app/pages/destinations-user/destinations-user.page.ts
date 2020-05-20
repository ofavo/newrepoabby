import { Component, OnInit } from '@angular/core';
import { FiltersServicesService } from '../../servicesGenerals/filters-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-destinations-user',
  templateUrl: './destinations-user.page.html',
  styleUrls: ['./destinations-user.page.scss'],
})
export class DestinationsUserPage implements OnInit {
public datos : any  = [];
  constructor(public filters : FiltersServicesService,public ruter: Router) { }

  ngOnInit() {
   this,this.filters.getItemTraking().then((data: any) =>{
     console.log(JSON.parse(data.value))
   })
  }
  createDireccrion(){
    this.ruter.navigateByUrl('folder/directions-envio')
  }

}
