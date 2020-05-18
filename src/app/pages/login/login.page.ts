import { Component, OnInit } from '@angular/core';
import { LoginServicesService } from './services/login-services.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { environment } from '../../../environments/environment';
import { FiltersServicesService } from '../../servicesGenerals/filters-services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email : string = "";
  public recoveryPassword : string = "";
  public password : string ="";
  public buttonActive : boolean = false;
  constructor(public http: LoginServicesService,  public router: Router,public filters : FiltersServicesService,
    public alertController: AlertController, public toastController: ToastController) { }

  ngOnInit() {
  }

  sentData() {
    let env = {
      email : this.email,
      password : this.password
    }
    this.http.postLogin(`${environment.apia}users/login`,env).subscribe((data: any)=>{
     
      if(data){
        this.filters.setToken(data.token)
        this.router.navigateByUrl('folder/locations')
        this.filters.setToken(data.token);
        console.log(data.token)
      }
    },err =>{
     this.presentAlert()
    })
  }

  sentEmail() {
    const headers = {"Content-Type":"application/json"}
    const body = {email:this.recoveryPassword}
    this.http.postEmail(`${environment.apia}users/recovery_password`,JSON.stringify(body), headers).subscribe((data: any)=>{
      if(data){
        this.toastValidEmail()
      }
    },err =>{
     this.toastNotExistEmail()
    })
  }
  
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Email o Contraseña Invalida',
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

  changeRecoverPassword (e) {
    console.log(e.target)
  }

  async recoverPassword() {
    const alert = await this.alertController.create({
      header: 'Recuperar Contraseña',
      inputs: [
        {
          name: 'recoveryPassword',
          type: 'text',
          id: 'recoveryPassword',
          value: this.recoveryPassword,
          placeholder: 'Email'
        },
      ],
      buttons: [
        {
          text: 'Enviar',
          cssClass: 'secondary',
          handler: (data) => {
            console.log(data.recoveryPassword)
            this.recoveryPassword = data.recoveryPassword
            if (/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(data.recoveryPassword)) {
              this.sentEmail()
            } else {
              this.toastInvalidEmail()
              return false;
            }
          }
        }
      ]
    });
    await alert.present();
  }

  async toastValidEmail() {
    const toast = await this.toastController.create({
      message: 'La contraseña fue enviada a su correo',
      duration: 2000
    });
    toast.present();
  }

  async toastInvalidEmail() {
    const toast = await this.toastController.create({
      message: 'Correo Inválido',
      duration: 2000
    });
    toast.present();
  }

  async toastNotExistEmail() {
    const toast = await this.toastController.create({
      message: 'El correo no esta registrado',
      duration: 2000
    });
    toast.present();
  }
  

}
