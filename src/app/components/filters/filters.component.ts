import { Component, OnInit } from '@angular/core';
import { ProductsPage } from '../../pages/products/products.page';
import { PopoverController } from '@ionic/angular';
import { Plugins } from '@capacitor/core';
import { VirtualTimeScheduler } from 'rxjs';

const { Storage } = Plugins;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
})
export class FiltersComponent implements OnInit {
  public idenv: any = [];
 
  constructor( public popover : PopoverController, private ProductsPage : ProductsPage) { }

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
     console.log(this.ProductsPage.id)
    this.ProductsPage.getItem(this.idenv)
    this.popover.dismiss().then((data ) => { 
    
      return  });;
  }

}
