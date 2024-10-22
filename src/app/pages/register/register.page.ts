import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  form = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    usuario: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.required]),
    contrasena: new FormControl('', [Validators.required]),
  })
  
  field:string="";

  constructor(public router: Router,public toastController:ToastController) { }

  UtilSRV = inject(UtilsService)

  ngOnInit() {
  }

  // Tomar o selecionar una imagen del celular.
  async takeImage(): Promise<void> {
    try {
      const result = await this.UtilSRV.takePicture('Foto de Perfil');
      console.log('Resultado de takePicture:', result); // Verifica la estructura del objeto resultante
      const dataUrl = result?.dataUrl;
      if (dataUrl) {
        if (this.form && this.form.controls && this.form.controls.imagen) {
          this.form.controls.imagen.setValue(dataUrl);
        } else {
          console.error('El control de imagen no está inicializado o no es accesible.');
        }
      } else {
        console.error('dataUrl no está definido en el resultado.');
      }
    } catch (error) {
      console.error('Error al tomar la foto:', error);
    }
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

  /**
  registrar(){
    if(this.validateModel(this.form.)){
      this.router.navigate(['/tab-componet/news']);
      this.presentToast("top","¡Bienvenido! No te pierdas las ultimas noticias, la tienda de articulos y las alerta de misiones de STW.",5000)
    }else{
      this.presentToast("middle","Falta ingresar un dato en el campo de: "+this.field);
    }    
  }
  **/

  async presentToast(position: 'top' | 'middle' | 'bottom', msg:string, duration?:number) {
    const toast = await this.toastController.create({
      message: msg,
      duration: duration?duration:2500,
      position: position,
    });
    await toast.present();
  }

}
