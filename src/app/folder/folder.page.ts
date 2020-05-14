  import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Perfil',
      url: '/folder/profile',
      icon: 'person'
    },
    {
      title: 'Direcioines de envio',
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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

  }

}
