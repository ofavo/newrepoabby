import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsServicesService {

  constructor(public http: HttpClient) { }

  get(url){
    return this.http.get(url);
  }
  post(url,env){
    return this.http.post(url,env)
  }
}
