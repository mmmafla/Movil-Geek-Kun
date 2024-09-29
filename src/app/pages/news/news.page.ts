import { Component, ViewChildren, ViewChild, ElementRef, OnInit, QueryList, } from '@angular/core';
import { AnimationController, IonCard, Animation, IonContent } from '@ionic/angular';
import { FortniteService  } from 'src/app/services/fortnite.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  @ViewChild(IonContent) content!: IonContent;

  @ViewChildren(IonCard, {read: ElementRef})
  cardElements!:QueryList<ElementRef<HTMLIonCardElement>>
  

  private animation!:Animation;

  newsItems: any[] = [];
  
  
  constructor(private animationController: AnimationController, private fortniteService: FortniteService) { }
  
  ngOnInit() {
    this.fortniteService.getNews().subscribe(
      response => {
          this.newsItems = response.data.br.motds; // Asignamos la lista de noticias
          console.log(this.newsItems); // Para depuración
      },
      error => {
        console.error('Error al cargar las noticias', error);
      }
    );
  }

  ngAfterViewInit(){
    const firstNews = this.animationController
      .create()
      .addElement(this.cardElements.get(0)!.nativeElement)
      .duration(1500)
      .iterations(Infinity)
      .direction('alternate')
      .fromTo('background', 'green', 'var(--background)'); 

      this.animation = this.animationController
      .create()
      .duration(4000)
      .iterations(Infinity)
      .addAnimation([firstNews]);

      this.animation.play();

  }

  scrollToTop() {
    this.content.scrollToTop(500);
  }

}
