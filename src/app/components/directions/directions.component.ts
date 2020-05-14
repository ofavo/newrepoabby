import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.scss'],
})
export class DirectionsComponent implements OnInit {
  public pais: string = "";
  public state : string = "";
  public city : string = "";
  public directionOne: string = ""
  constructor(public modalController: ModalController, private navparams: NavParams) { }

  ngOnInit() {}

}