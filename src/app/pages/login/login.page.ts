import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  login:any={
    user:"",
    password:""
  }

  field:string="";

  constructor(public router: Router,public toastController:ToastController) { }

  ngOnInit() {
  }

  validateModel(model:any){
    for(var [key ,value] of Object.entries(model)){
      if(value == ""){
        this.field = key;
        return false;
      }
    } 
    return true;
  }

  ingresar(){
    if(this.validateModel(this.login)){
      this.router.navigate(['/tab-componet/news']);
      this.presentToast("top","¡Bienvenido! No te pierdas las ultimas noticias, la tienda de articulos y las alerta de misiones de STW.",5000)
    }else{
      this.presentToast("middle","Falta ingresar un dato en el campo de: "+this.field);
    }    
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });
    await toast.present();
  }

}