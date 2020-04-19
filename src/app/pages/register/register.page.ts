import { Component, OnInit } from '@angular/core';
import { ResgisterServicesService } from './services/resgister-services.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  public firstname : string = "";
  public lastname : string = "";
  public email : string = "";
  public password : string =""; 
  public passwordConfirm : string ="";
  public buttonActive : boolean = false;
  constructor(public http: ResgisterServicesService,  public router: Router,public alertController: AlertController) { }

  ngOnInit() {
  }

  sentData() {
    let env = {
      firstname : this.firstname,
      lastname : this.lastname,
      email : this.email,
      password : this.password
    }
    this.http.postRegister(`${environment.apia}users/register`,env).subscribe((data: any)=>{
      if(data){
        this.router.navigateByUrl('login')
      }
    },err =>{
     this.passwordsMatch()
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

}
