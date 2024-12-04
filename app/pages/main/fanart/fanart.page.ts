import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddFanartComponent } from 'src/app/shared/components/add-fanart/add-fanart.component';
import { EmailService } from 'src/app/services/email.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-fanart',
  templateUrl: './fanart.page.html',
  styleUrls: ['./fanart.page.scss'],
})
export class FanartPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  name = '';
  email = '';
  message = '';

  constructor(private emailService: EmailService, private toastController: ToastController) { }

  ngOnInit() {
  }

  // Subir Fanart

  addFanart() {
    this.utilsSvc.presentModal({
      component: AddFanartComponent,
      cssClass: 'add-update-modal'
    })
  }

  async sendEmail() {
    const formData = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    try {
      const response = await this.emailService.sendEmail(formData);
      const toast = await this.toastController.create({
        message: 'Correo enviado con éxito.',
        duration: 3000,
        color: 'success',
      });
      await toast.present();
    } catch (error) {
      const toast = await this.toastController.create({
        message: 'Error al enviar el correo. Intenta de nuevo.',
        duration: 3000,
        color: 'danger',
      });
      await toast.present();
    }

  }

}
