import { Component, OnInit } from '@angular/core';
import { ProfileServicesService } from './services/profile-services.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { ToastController } from '@ionic/angular';
import { FiltersServicesService} from '../../servicesGenerals/filters-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public id : string = "";
  public firstname : string = "";
  public lastname : string = "";
  public email : string = "";
  public password : string ="";
  public dni : string = "";
  public url : string = environment.apia + "users?self";
  public urlput : string = environment.apia + "users/";
  public passwordConfirm : string ="";
  public buttonActive : boolean = false;
  public buttonDrop : boolean = false;
  public buttonCredit: boolean = false;
  public buttonPhoto: boolean = false;
  public photo: SafeResourceUrl;
  public photoProfile: SafeResourceUrl;
  public users: any = [];

  constructor(private sanitizer: DomSanitizer,public http: ProfileServicesService,  public router: Router,public alertController: AlertController,
    public filters : FiltersServicesService, public toastController: ToastController) { }

  ngOnInit() {
    this.filters.getToken().then((envio)=>{
      const headers = {
        'Content-Type' : 'application/json',
        'Authorization' : envio
      }
      this.http.getUser(this.url, {headers: headers}).subscribe((data: any)=>{
        this.users = data
        this.id = data.id
      })
    })
  }

  sentData() {
    let env = {
      firstname : this.firstname,
      lastname : this.lastname,
      email : this.email,
    }
    this.filters.getToken().then((envio)=>{
      const headers = {
        'Content-Type' : 'application/json',
        'Authorization' : envio
      }
      this.http.putUser(this.urlput+this.id,env,{headers: headers}).subscribe((data: any)=>{
        this.toastUpdateProfile()
      },err =>{
        this.toastUpdateProfileNo()
      })
    })
  }

  async toastUpdateProfile() {
    const toast = await this.toastController.create({
      message: 'Sus datos se han actualizado correctamente',
      duration: 2000
    });
    toast.present();
  }

  async toastUpdateProfileNo() {
    const toast = await this.toastController.create({
      message: 'Sus datos no se han actualizado',
      duration: 2000
    });
    toast.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Las contraseñas no coinciden',
      buttons: ['OK']
    });
    await alert.present();
  }

  validateEmail(){
    if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(this.email)){
      this.buttonActive = true;
     } else {
     this.buttonActive = false;
     }
  }

  passwordsMatch = () => {
    if (this.password != this.passwordConfirm) {
      this.presentAlert()
    }
  };

  buttonDropdown = () => {
    if (this.buttonDrop) {
      this.buttonDrop = false;
    } else {
      this.buttonDrop = true;
    }
  }

  buttonCreditCard = () => {
    if (this.buttonCredit) {
      this.buttonCredit = false;
    } else {
      this.buttonCredit = true;
    }
  }

  buttonPhotoProfile = () => {
    if (this.buttonPhoto) {
      this.buttonPhoto = false;
    } else {
      this.buttonPhoto = true;
    }
  }

async captureProfile () {
    const image = await Plugins.Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera
    })
    this.photoProfile = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));

  }

async searchProfile ()  {
    const image = await Plugins.Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Photos
    })
     this.photoProfile = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

async capturePhoto () {
    const image = await Plugins.Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Camera
    })
    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));

  }

async searchPhoto ()  {
    const image = await Plugins.Camera.getPhoto({
    quality: 100,
    allowEditing: false,
    resultType: CameraResultType.DataUrl,
    source: CameraSource.Photos
    })
     this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

}
