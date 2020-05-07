import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FiltersComponent } from './components/filters/filters.component'

@NgModule({
  declarations: [AppComponent, CardComponent, FiltersComponent],
  entryComponents: [CardComponent,FiltersComponent],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
