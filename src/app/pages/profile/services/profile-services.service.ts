import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

let token = localStorage.getItem('token')
const headers = {
  'Content-Type' : 'application/json',
  'Authorization' : token
}

@Injectable({
  providedIn: 'root'
})
export class ProfileServicesService {

  constructor(public http: HttpClient) { }

  putUser(url,env){
    return this.http.put(url,env);
  }

  getUser(url){
    return this.http.get(url, {headers:headers})
  }
}
