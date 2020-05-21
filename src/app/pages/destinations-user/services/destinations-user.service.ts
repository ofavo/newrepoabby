import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DestinationsUserService {

  constructor(public http: HttpClient) { }

  post(url,env){
    this.http.post(url,env).subscribe((data: any) =>{
      return data;
    }, err => {
      return 'Error';
    })
  }
}
