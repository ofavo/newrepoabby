import { NgModule } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';

import { FolderPage } from './folder.page';


const routes: Routes = [
  {
    path: '',
    component: FolderPage,
    children:[
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      
  {
    path: 'orders',
    loadChildren: () => import('../pages/order/tabs/tabs.module').then( m => m.TabsPageModule)
  },
     {
       path: 'locations',
       loadChildren: () => import('../pages/locations/locations.module').then( m => m.LocationsPageModule)
     },
     {
       path: 'stores/:id/:name',
       loadChildren: () => import('../pages/stores/stores.module').then( m => m.StoresPageModule)
     },
     {
       path: 'products/:id/:name',
       loadChildren: () => import('../pages/products/products.module').then( m => m.ProductsPageModule)
     },
     {
       path: 'categorys/:id/:name',
       loadChildren: () => import('../pages/category/category.module').then(m => m.CategoryPageModule)
     },
     {
      path: 'presentations/:id/:name',
      loadChildren: () => import('../pages/presentations/presentations.module').then(m => m.PresentationsPageModule)
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FolderPageRoutingModule {}
