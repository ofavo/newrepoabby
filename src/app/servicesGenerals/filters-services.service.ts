import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Observable } from 'rxjs';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FiltersServicesService {
  
  constructor() { }
  
  
  getItem() {
    
    let value  =  Storage.get({ key: 'name' });
    return value;
  }
  async setItem(value){
    await Storage.set({
      key: 'name',
      value: value
    });
  }
  async removeItem() {
    await Storage.remove({ key: 'name' });
  }
  

}
