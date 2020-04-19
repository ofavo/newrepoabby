import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ResgisterServicesService {

  constructor(public http: HttpClient) { }

  postRegister(url,env){
    return this.http.post(url,env);
  }
}
