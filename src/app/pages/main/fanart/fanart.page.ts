import { Component, inject, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { AddFanartComponent } from 'src/app/shared/components/add-fanart/add-fanart.component';

@Component({
  selector: 'app-fanart',
  templateUrl: './fanart.page.html',
  styleUrls: ['./fanart.page.scss'],
})
export class FanartPage implements OnInit {

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor() { }

  ngOnInit() {
  }

  // Subir Fanart

  addFanart() {
    this.utilsSvc.presentModal({
      component: AddFanartComponent,
      cssClass: 'add-update-modal'
    })
  }

}
