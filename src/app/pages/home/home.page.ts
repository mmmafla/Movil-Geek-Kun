import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;

  constructor() {}

  scrollToTop() {
    this.content.scrollToTop(500);
  }
}
