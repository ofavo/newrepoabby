import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FolderServicesService {

  constructor(public http: HttpClient) { }

  getUser(url, headers){
    return this.http.get(url, headers)
  }

}
