import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StoresServicesService {

  constructor(public http: HttpClient) { }

  get(url){
    return this.http.get(url);
  }

}
