import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DirectionsEnvioService {

  constructor(public http: HttpClient) { }

  getAddress(url, headers){
    return this.http.get(url, headers)
  }

}
