import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(public http: HttpClient) { }

  reviverUser(url,env){
    return this.http.put(url,env);
  }

  getUser(url){
    return this.http.get(url);
  }
}
