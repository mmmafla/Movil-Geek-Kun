import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  register:any={
    Nombre:"",
    Apellido:"",
    Usuario:"",
    Correo:"",
    Contrasena:""
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

  registrar(){
    if(this.validateModel(this.register)){
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
