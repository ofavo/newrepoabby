import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  public order : any = [];
  public details : any = [];
  public date : any;
  public minutes : any;
  public hours : any;
  public update : any;

  constructor(public modalController: ModalController, private navparams: NavParams) { }

  ngOnInit() {
    this.order = this.navparams.get('data')
    this.details = this.order.details;
    this.order.start_date_time = new Date().getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
    this.order.tracking.date_time = new Date();
    this.date = this.order.tracking.date_time.getDate() + '/' + (new Date().getMonth() + 1) + '/' + new Date().getFullYear();
    this.hours = this.order.tracking.date_time.getHours();
    this.minutes = this.order.tracking.date_time.getMinutes();
    if (this.minutes < 10) {
      this.minutes = '0' + this.minutes;
    }
    this.update = this.hours + ':' + this.minutes;
    console.log(this.order.amount)
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }


}
