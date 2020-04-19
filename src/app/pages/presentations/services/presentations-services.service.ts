import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PresentationsServicesService {

  constructor(public http: HttpClient) { }

  getPresentations(url){
    return this.http.get(url);
  }
}
