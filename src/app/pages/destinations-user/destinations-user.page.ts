import { Component, OnInit } from '@angular/core';
import { FiltersServicesService } from '../../servicesGenerals/filters-services.service';

@Component({
  selector: 'app-destinations-user',
  templateUrl: './destinations-user.page.html',
  styleUrls: ['./destinations-user.page.scss'],
})
export class DestinationsUserPage implements OnInit {
public datos : any  = [];
  constructor(public filters : FiltersServicesService) { }

  ngOnInit() {
    let valor: any = this.filters.getItemTraking();
    this.datos = valor
    console.log(this.datos)
  }

}
