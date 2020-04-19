import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServicesService {

  constructor(public http: HttpClient) { }

  postLogin(url,env){
    return this.http.post(url,env);
  }

  postEmail(url,email,headers){
    return this.http.post(url,email,{headers});
  }
}
