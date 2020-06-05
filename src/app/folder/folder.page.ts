import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FiltersServicesService} from '../servicesGenerals/filters-services.service';
import { FolderServicesService } from '../servicesGenerals/folder-services.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public selectedIndex = 0;
  public url : string = environment.apia + "users?self";
  public users: any = [];
  public appPages = [
    {
      title: 'Perfil',
      url: '/folder/profile',
      icon: 'person'
    },
    {
      title: 'Direcciones de envio',
      url: '/folder/directions-envio',
      icon: 'location'
    },
    {
      title: 'Tiendas',
      url: '/folder/locations',
      icon: 'home'
    },
    {
      title: 'Mis Pedidos',
      url: '/folder/orders/tab1',
      icon: 'cart'
    },
    {
      title: 'Delivery',
      url: '/folder/delivery/process',
      icon: 'bicycle'
    },
  
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  public photoProfile: any;

  constructor(private activatedRoute: ActivatedRoute, public ruter: Router, public filters : FiltersServicesService, public http: FolderServicesService) { }

  ngOnInit() {
    this.filters.getToken().then((envio)=>{
      const headers = {
        'Content-Type' : 'application/json',
        'Authorization' : envio
      }
      this.http.getUser(this.url, {headers: headers}).subscribe((data: any)=>{
        this.users = data
        this.photoProfile = data.profile_image
        if(this.users.id){
          this.filters.setIdUsers(this.users.id)
        }
      })
    })

  }

  logOut = () => {
    localStorage.clear();
    this.ruter.navigate(['/login'])
  };

}
