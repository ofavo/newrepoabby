import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectionsServiceService {

  constructor(public http: HttpClient) { }

  postDirections(url,env,headers){
    return this.http.post(url,env,headers);
  }

  getAddress(url, headers){
    return this.http.get(url, {headers:headers})
  }
}
