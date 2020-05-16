import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProfileServicesService {

  constructor(public http: HttpClient) { }

  putUser(url,env){
    return this.http.put(url,env);
  }

  getUser(url, headers){
    return this.http.get(url, headers)
  }
}
