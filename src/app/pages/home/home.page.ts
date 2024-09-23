import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { FortniteService  } from 'src/app/services/fortnite.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild(IonContent) content!: IonContent;
  
  newsItems: any[] = [];

  constructor(private fortniteService: FortniteService) {}

  ngOnInit() {
    this.fortniteService.getNews().subscribe(
      response => {
          this.newsItems = response.news; // Asignamos la lista de noticias
          console.log(this.newsItems); // Para depuración
      },
      error => {
        console.error('Error al cargar las noticias', error);
      }
    );
  }
  scrollToTop() {
    this.content.scrollToTop(500);
  }
}


