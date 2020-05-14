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
  async setItemTraking(value){
   
    await Storage.set({
      key: 'traking',
      value  : JSON.stringify( {
        id:	value.id,
        code:	value.code,
        start_date_time:	value.start_date_time,
        finish_date_time: value.finish_date_time,
        user_buyer_id: value.user_buyer_id,
        user_receive_id: value.user_buyer_id,
        user_delivery_id: value.user_delivery_id,
        amount: value.amount,
        photo:	value.photo,
        observations: value.observations,
        qr: value.qr,
        account: value.account,
        userid: value.userid
      })
    });
  }
  getItemTraking() {
    const ret : any =  Storage.get({  key: 'traking'});
    const value =   JSON.parse(ret.__zone_symbol__value.value);
  
    return value;
  }
  async removeItemTraking() {
    await Storage.remove({ key: 'traking' });
  }
    
  getToken() {
    
    let value  =  Storage.get({ key: 'token' });
    return value;
  }
  async setToken(value){
    await Storage.set({
      key: 'token',
      value: value
    });
  }
  async removeToken() {
    await Storage.remove({ key: 'token' });
  }

}
