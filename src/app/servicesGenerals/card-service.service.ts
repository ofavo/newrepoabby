import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(public http: HttpClient) { }

  postOrdes(url, env){
    return this.http.post(url,env);
  }
}
