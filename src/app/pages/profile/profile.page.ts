import { Component, OnInit } from '@angular/core';
import { ProfileServicesService } from './services/profile-services.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { environment } from '../../../environments/environment';
import { FiltersServicesService} from '../../servicesGenerals/filters-services.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  public name : string = "";
  public email : string = "";
  public password : string ="";
  public dni : string = "";
  public url : string = environment.apia + "users?self";
  public passwordConfirm : string ="";
  public buttonActive : boolean = false;
  public buttonDrop : boolean = false;
  public buttonCredit: boolean = false;
  public buttonPhoto: boolean = false;
  public photo: SafeResourceUrl;
  public photoProfile: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer,public http: ProfileServicesService,  public router: Router,public alertController: AlertController,
    public filters : FiltersServicesService) { }

  ngOnInit() {
    this.filters.getToken().then((token)=>{
      console.log('token: ',token)
      const headers = {
        'Content-Type' : 'application/json',
        'Authorization' : token.value
      }
      this.http.getUser(this.url, headers).subscribe((data: any)=>{
        console.log(data)
      })
    })
  }

  sentData() {
    let env = {
      name : this.name,
      email : this.email,
      password : this.password,
      dni : this.dni
    }
    this.http.putUser(this.url,env).subscribe((data: any)=>{

    },err =>{
     this.presentAlert()
    })
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
