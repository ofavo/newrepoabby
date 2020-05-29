import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { Observable } from 'rxjs';

const { Storage } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class FiltersServicesService {
  
  constructor() { }
  
  
  async getItem() {
    
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
    console.log(value)
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
        userid: value.userid,
        traking: value.Tracking[0]
      })
    });
  }
  async getItemTraking() {
    const ret : any =  Storage.get({  key: 'traking'});
    const value =   ret
    return value;
  }
  
  async removeItemTraking() {
    await Storage.remove({ key: 'traking' });
  }
    
  async getToken() {
    const { value } = await Storage.get({ key: 'token' });
   
    let envio : string = value
  
    return envio.toString();
  }

  async setToken(value: any){
    await Storage.set({
      key: 'token',
      value: value
    });
  }

  async removeToken() {
    await Storage.remove({ key: 'token' });
  }
  async getCity() {
    const { value } = await Storage.get({ key: 'city' });
   
    let envio : string = value
  
    return envio.toString();
  }

  async setCity(value: any){
    await Storage.set({
      key: 'city',
      value: value
    });
  }

  async removeCity() {
    await Storage.remove({ key: 'city' });
  }
  async getIdUsers() {
    const { value } = await Storage.get({ key: 'idusers' });
   
    let envio : string = value
  
    return envio.toString();
  }

  async setIdUsers(value: any){
    await Storage.set({
      key: 'idusers',
      value: value
    });
  }

  async removeIdUsers() {
    await Storage.remove({ key: 'idusers' });
  }

}
