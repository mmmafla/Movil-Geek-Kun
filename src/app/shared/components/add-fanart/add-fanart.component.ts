import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-add-fanart',
  templateUrl: './add-fanart.component.html',
  styleUrls: ['./add-fanart.component.scss'],
})
export class AddFanartComponent  implements OnInit {

  form = new FormGroup({
    id: new FormControl(''),
    image: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required]),
    caption: new FormControl('', [Validators.required])
  })

  fireBaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  user = {} as User;

  ngOnInit() {
    this.user = this.utilsSvc.getFromLocalStorage('user');
  }

  async takeImage(): Promise<void> {
    try {
      const result = await this.utilsSvc.takePicture('Foto de Perfil');
      console.log('Resultado de takePicture:', result); // Verifica la estructura del objeto resultante
      const dataUrl = result?.dataUrl;
      if (dataUrl) {
        if (this.form && this.form.controls && this.form.controls.image) {
          this.form.controls.image.setValue(dataUrl);
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

  async submit() {

    if (this.form.valid) {

      let path = `users/${this.user.uid}/fanarts`

      const loading = await this.utilsSvc.loading();
      await loading.present();

      // Subir imagen y obtener url

      let dataUrl = this.form.value.image;
      let imagePath = `${this.user.uid}/${Date.now()}`
      let imageUrl = await this.fireBaseSvc.uploadImage(imagePath, dataUrl)
      this.form.controls.image.setValue(imageUrl);
      delete this.form.value.id

      this.fireBaseSvc.addDocument(path, this.form.value).then(async res => {

        this.utilsSvc.dismissModal({ success: true });

        this.utilsSvc.presentToast({

          message: '¡Fan-Art subido con exito!',
          duration: 1500,
          color: 'success',
          position: 'middle',
          icon: 'checkmark-circle-outline'

        })

      }).catch(error => {

        console.log(error);
        this.utilsSvc.presentToast({

          message: error.message,
          duration: 2500,
          color: 'primary',
          position: 'middle',
          icon: 'alert-circle-outline'

        })

      }).finally(() => {

        loading.dismiss();

      })
    }

  }

}